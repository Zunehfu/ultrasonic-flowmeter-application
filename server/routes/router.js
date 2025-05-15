import express from "express";
import {
  userSignup,
  userSignin,
  userVerify,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/auth/signin").post(userSignin);
router.route("/auth/verify").get(userVerify);
router.route("/auth/signup").post(userSignup);

export default router;
