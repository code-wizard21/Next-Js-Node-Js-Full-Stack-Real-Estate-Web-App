import express from "express";
const router = express.Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

// protect and role authorization middlewares;
import { protect, authorize } from "../middlewares/authMiddleware.js";

// this route is totaly for logged in admin user;
router.use(protect);
router.use(authorize("admin"));

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
