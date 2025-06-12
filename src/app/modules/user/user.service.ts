import { Admin, Doctor, Patient, userRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import { Request } from "express";

const createAdmin = async (req: Request): Promise<Admin> => {
  console.log(req.body);
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  //   user data
  const userData = {
    email: req.body.admin.email,
    password: hashedPassword,
    role: userRole.admin,
  };
  
  const result = await prisma.$transaction(async (transactionClient) => {
    //create user
    await transactionClient.user.create({
      data: userData,
    });
    //create Admin
    const createdAdmin = await transactionClient.admin.create({
      data: req.body.admin,
    });
    return createdAdmin;
  });

  return result;
};

const createDoctor = async (req:Request):Promise<Doctor> => {
  //hase the password
  const hashedPassword= await bcrypt.hash(req.body.password, 12);

  const userData={
    email:req.body.doctor.email,
    password:hashedPassword,
    role:userRole.doctor
  }
  const result = await prisma.$transaction(async(transactionClient)=>{
    await transactionClient.user.create({
      data:userData,
    });
    const createdDoctorData= await transactionClient.doctor.create({
      data:req.body.doctor
    })
    return createdDoctorData;
  })

  return result;
};

const createPatient = async (req:Request):Promise<Patient> => {
  const hashedPassword= await bcrypt.hash(req.body.password,12);

  const userData ={
    email:req.body.patient.email,
    password:hashedPassword,
    role:userRole.patient
  }

  const result = await prisma.$transaction(async(transactionClient)=>{
    await transactionClient.user.create({
      data:userData
    })
    const createdPatientData= await transactionClient.patient.create({
      data:req.body.patient,
    })
    return createdPatientData
  })
  return result;

};

const getAllFromDB = async () => {
  const getAll = await prisma.user.findMany({});
  return getAll;
};

const changeProfileStatus = async () => {};

const getMyProfile = async () => {};

const updateMyProfile = async () => {};

export const userService = {
  createAdmin,
  createDoctor,
  createPatient,
  getAllFromDB,
  changeProfileStatus,
  getMyProfile,
  updateMyProfile,
};
