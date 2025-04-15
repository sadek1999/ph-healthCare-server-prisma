import express from "express";
import { adminController } from "./admin.controller";

import { auth } from "../../middleware/auth";
import { userRole } from "@prisma/client";

const router = express.Router();

router.get("/", auth(userRole.admin,userRole.superAdmin), adminController.getAllFromDB);

export const adminRoute = router;
