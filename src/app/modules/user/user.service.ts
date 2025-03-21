import { Admin, userRole, userStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";
import * as bcrypt from 'bcrypt';
import { Request } from "express";

const createAdmin = async (req: Request): Promise<Admin> => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  // ✅ Prepare user data (only required fields)
  const userData = {
    email: req.body.email,
    password: hashedPassword,
    role: userRole.admin, // ✅ Correct enum usage for userRole
    // needPasswordChange: false, // ✅ Manually override if needed
    // status: userStatus.active, // ✅ Correct enum usage for userStatus
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    // ✅ Create the User first
    await transactionClient.user.create({
      data: userData,
    });

    // ✅ Create the Admin and maintain the relation via email
    const createdAdmin = await transactionClient.admin.create({
      data: {
        name: req.body.name,
        email: req.body.email,           // ✅ Critical for relation
        profilePhoto: req.body.profilePhoto || null, // ✅ Optional field, set null if not provided
        contactNumber: req.body.contactNumber,
        // isDeleted, createdAt, updatedAt will be set by Prisma defaults
      },
    });

    return createdAdmin;
  });

  return result;
};

export const userService = {
  createAdmin,
};
