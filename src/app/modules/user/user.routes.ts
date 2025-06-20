import express from "express";
import { userController } from "./user.controller";
import { Response } from "express";
import { Request } from "express";
import { fileUploader } from "../../../helpars/fileUploader";
import multer from "multer";
import path from "path";

const router = express.Router();

// getAll user  only admin and superadmin can get that

// get my profile /me  only register user
// create admin  api post  /create-admin
//file uploader and  zod validation pars json from text
// create_doctor
// create_patient
//patch route for status update
// patch for  update-my-profile

router.post("/createAdmin", userController.createAdmin);

router.get("/", userController.getAllFromDB);

export const userRoute = router;
