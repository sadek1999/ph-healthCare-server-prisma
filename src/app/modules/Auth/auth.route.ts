import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

router.post("/login", authController.userLogin);
router.post("/refresh-token", authController.refreshToken);
router.post("/change-password", authController.changePassword);
router.post("/forgat-password", authController.forgatPassword);

export const authRoute = router;
