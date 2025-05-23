import { Admin, userRole, userStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";
import * as bcrypt from 'bcrypt';
import { Request } from "express";

const createAdmin = async (req: Request): Promise<Admin> => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  //   user data 
  const userData = {
    email: req.body.email,
    password: hashedPassword,
    role: userRole.admin, 
   
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    //  Create the User first
    await transactionClient.user.create({
      data: userData,
    });

    // Create the Admin and maintain the relation via email
    const createdAdmin = await transactionClient.admin.create({
      data: {
        name: req.body.name,
        email: req.body.email,           // Critical for relation
        profilePhoto: req.body.profilePhoto || null, // Optional field, set null if not provided
        contactNumber: req.body.contactNumber,
        // isDeleted, createdAt, updatedAt will be set by Prisma defaults
      },
    });

    return createdAdmin;
  });

  return result;
};

const createDoctor = async()=>{

}

const  createPatient = async()=>{}

const getAllFromDB=async()=>{


  const getAll= await prisma.user.findMany({})
  return getAll;
}

const changeProfileStatus=async()=>{

}

const getMyProfile=async()=>{}

const updateMyProfile=async()=>{}

export const userService = {
  createAdmin,
  createDoctor,
  createPatient,
  getAllFromDB,
  changeProfileStatus,
  getMyProfile,
  updateMyProfile
};
