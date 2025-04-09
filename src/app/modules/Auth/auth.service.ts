import prisma from "../../../shared/prisma";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtHelper } from "../../../helpars/jwtHelper";
import { userStatus } from "@prisma/client";



const userLogin = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status:userStatus.active,
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

const refreshToken=async(token:any)=>{
    
    let decoded

    try{
     decoded=jwtHelper.verifyToken(token,'abcdefgh');
    
    }
    catch(err){
      throw new Error('password can not match...')
    }
    

    const user=await prisma.user.findUniqueOrThrow({
      where:{
        email:decoded.email,
        status:userStatus.active
      }
    })
   
    const accessToken = jwtHelper.generateToken({email:user.email,role:user.role},'abcdef','2d')

    return {
      accessToken,
      needPasswordChange:user.needPasswordChange,
    };

}

export const authService = {
  userLogin,
  refreshToken,
};
