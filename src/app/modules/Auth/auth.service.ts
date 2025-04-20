import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtHelper } from "../../../helpars/jwtHelper";
import { userStatus } from "@prisma/client";
import config from "../../../config";


const userLogin = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status: userStatus.active,
    },
  });

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    user.password
  );
  if (!isCorrectPassword) {
    throw new Error("password can not match");
  }

  const accessToken = jwtHelper.generateToken(
    { email: user.email, role: user.role },
    config.jwt.jwt_secret as string,
    config.jwt.expire_in as string
  );

  const refreshToken = jwtHelper.generateToken(
    { email: user.email, role: user.role },
    config.jwt.refresh_token_secret as string,
     config.jwt.refresh_toke_expires_in as string,
  );
  return {
    accessToken,
    refreshToken,

    needPasswordChange: user.needPasswordChange,
  };
};

const refreshToken = async (token: any) => {
  let decoded;

  try {
    decoded = jwtHelper.verifyToken(token, "abcdefgh");
  } catch (err) {
    throw new Error("password can not match...");
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: decoded.email,
      status: userStatus.active,
    },
  });

  const accessToken = jwtHelper.generateToken(
    { email: user.email, role: user.role },
    config.jwt.jwt_secret as string  ,
     config.jwt.expire_in as string
  );

 

  return {
    accessToken,
    needPasswordChange: user.needPasswordChange,
  };
};


const changePassword= async()=>{

}

const forgatPassword=async()=>{

}

export const authService = {
  userLogin,
  refreshToken,
  changePassword,
  forgatPassword,
};
