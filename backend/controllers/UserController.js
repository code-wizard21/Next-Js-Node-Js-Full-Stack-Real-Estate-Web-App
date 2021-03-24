import User from "../models/User.js";
import ErrorResponse from "../helpers/errorResponse.js";
import asyncHandler from "../middlewares/async.js";

/**
 * @desc    This Controller is for get, create, update and delete any users
 * @access  Private(Only Admin)
 */

/**
 * @desc    Get All Users
 * @route   GET /api/users
 * @access  Private(Only Admin)
 */
export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    data: users,
  });
});

/**
 * @desc    Get single User by id
 * @route   GET /api/users/:id
 * @access  Private(Only Admin)
 */
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new ErrorResponse("User not found.", 404));
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * @desc    Create a new User
 * @route   POST /api/users
 * @access  Private(Only Admin)
 */
export const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

/**
 * @desc    Update User
 * @route   PUT /api/users/:id
 * @access  Private(Only Admin)
 */
export const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
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
 * @desc    Delete User
 * @route   DELETE /api/users/:id
 * @access  Private(Only Admin)
 */
export const deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});
