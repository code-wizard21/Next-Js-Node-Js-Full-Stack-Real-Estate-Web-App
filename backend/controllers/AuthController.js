import User from "../models/User.js";
import ErrorResponse from "../helpers/errorResponse.js";
import asyncHandler from "../middlewares/async.js";

/**
 * @desc    Custom function to get token from model, create cookie and send response
 */
const sendTokenResponse = (user, statusCode, res) => {
  // Create JWT Token
  const token = user.getSignedJwtToken();
  const name = user.name;

  const options = {
    //cookie expire zamanını jwt de ki gibi 30 gün olmasını istiyoruz;
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // Production da iken options a secure true ekliyoruz ki https olsun;
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token, name });
};

/**
 * @desc    Register User
 * @route   POST /api/auth/register
 * @access  Public(No Auth)
 */
export const register = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  sendTokenResponse(user, 200, res);
});

/**
 * @desc    Login User
 * @route   POST /api/auth/login
 * @access  Public(No Auth)
 */
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password;
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check if user exists in database; // modelde password select false dediğimiz için burda password u alabilmek için select kullanıyoruz
  const user = await User.findOne({ email: email }).select("+password");

  // check for user 401 unauthorized response
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Check if password matches;
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

/**
 * @desc    Get current logged in user
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @desc    Logout the user and clear cookie
 * @route   GET /api/auth/logout
 * @access  Public
 */
export const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000), // 10 seconds
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

/**
 * @desc    Logged in user will Update his own user profile(only name, email, phone and photo)
 * @route   PUT /api/auth/updateprofile
 * @access  Private
 */
export const updateProfile = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  };

  // TODO:: image upload islemi yapilacak!!!

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @desc    Update Password (logged in user will update his password)
 * @route   PUT /api/auth/updatePassword
 * @access  Private
 */
export const updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  // Check current password;// Old password olacak o doğrumu diye control ediyoruz. User model de match metodumuz vardı kullanıcının girdiği password ile database de ki hashed password eşleşiyormu diye. Onu kullanacak burda kontrol yapıcaz;
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return next(
      new ErrorResponse("Enter your current password correctly", 401)
    );
  }

  user.password = req.body.newPassword;
  user.save();

  // jwt yenilensin diye;
  sendTokenResponse(user, 200, res);
});
