import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtHelper } from "../../../helpars/jwtHelper";



const userLogin = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    user.password
  );
  if (!isCorrectPassword) {
    throw new Error("password can not match");
  }

  const accessToken = jwtHelper.generateToken({email:user.email,role:user.role},'abcdef','2d')

  const refreshToken = jwtHelper.generateToken({email:user.email,role:user.role},'abcdefgh','30d')
  return {
    accessToken,
    refreshToken,

    needPasswordChange: user.needPasswordChange,
  };
};

export const authService = {
  userLogin,
};
