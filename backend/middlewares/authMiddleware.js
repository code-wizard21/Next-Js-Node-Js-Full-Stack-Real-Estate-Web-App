import jwt from "jsonwebtoken";
import asyncHandler from "./async.js";
import ErrorResponse from "../helpers/errorResponse.js";
import User from "../models/User.js";

// protect routes (only logged in user is allow to access);
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("token from header.authorization: ", token);
  } else if (req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
  } else if (req.cookies) {
    token = req.cookies.token;
  } else {
    return next(new ErrorResponse("Not authorized to access!", 401));
  }

  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.startsWith("Bearer")
  //   ) {
  //     token = req.headers.authorization.split(" ")[1];
  //     console.log("dolu token is: ", token);
  //   }
  //   // cookiede token varsa;
  //   else if (req.cookies.token) {
  //     console.log("else if e dustu");
  //     token = req.cookies.token;
  //   } else {
  //     console.log("token yok ellamm!!");
  //     return next(new ErrorResponse("Not authorized to access!", 401));
  //   }

  // Make sure token exists;
  //   if (token === void 0) {
  //     console.log("token yok ellamm!!");
  //     return next(new ErrorResponse("Not authorized to access!", 401));
  //   }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // This is the logged in user;(in any route we re using this protect, we have access to logged in user with req.user)
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access!", 401));
  }
});

// role permission middleware;
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      // 403 is forbidden error
      return next(
        new ErrorResponse(
          `User role '${req.user.role}' is not authorized to access this route!`,
          403
        )
      );
    }
    next();
  };
};
