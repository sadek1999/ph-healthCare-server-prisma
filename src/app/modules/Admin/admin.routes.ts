import express from "express";
import { adminController } from "./admin.controller";

import { auth } from "../../middleware/auth";
import { userRole } from "@prisma/client";
import validateRequest from "../../middleware/validateRequest";
import { adminValidationSchemas } from "./admin.validations";

const router = express.Router();

router.get(
  "/",
  auth(userRole.admin, userRole.superAdmin),
  adminController.getAllFromDB
);

router.get(
  "/:id",
  auth(userRole.admin, userRole.superAdmin),
  adminController.getByIdFromDB
);
router.patch(
  "/:id",
  auth(userRole.admin, userRole.superAdmin),
  validateRequest(adminValidationSchemas.update),
  adminController.updateIntoDB
);
router.delete(
  "/:id",
  auth(userRole.admin, userRole.superAdmin),
  adminController.deleteFromDB
);
router.delete(
  "/soft/:id",
  auth(userRole.admin, userRole.superAdmin),
  adminController.softDeleteFromDB
);

export const adminRoute = router;
