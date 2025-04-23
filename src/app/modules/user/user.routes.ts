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

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});


const upload = multer({ storage: storage });

router.post("/img"
    , upload.single('file')
    , (req, res) => {
        console.log('file:',req.file); // should not be undefined
        console.log('body:', req.body);
        // res.send("Uploaded");
});
console.log(path.join(process.cwd(), "uploads"));

router.post(
  "/createAdmin",
  //   upload.single('file'),
  userController.createAdmin
);

router.get("/", userController.getAllFromDB);

export const userRoute = router;
