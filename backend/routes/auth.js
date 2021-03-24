import express from "express";
const router = express.Router();

import {
  register,
  login,
  getMe,
  logout,
  updateProfile,
  updatePassword,
} from "../controllers/AuthController.js";

// protect middleware;
import { protect } from "../middlewares/authMiddleware.js";

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.get("/logout", logout);
router.put("/updateProfile", protect, updateProfile);
router.put("/updatePassword", protect, updatePassword);

export default router;
