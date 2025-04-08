import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  const accessToken = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    "abcdef",
    { algorithm: "HS512", expiresIn: "10m" }
  );

  const refreshToken = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    "abcdefgh",
    { algorithm: "HS512", expiresIn: "30d" }
  );

  return {
    accessToken,
    refreshToken,

    needPasswordChange: user.needPasswordChange,
  };
};

export const authService = {
  userLogin,
};
