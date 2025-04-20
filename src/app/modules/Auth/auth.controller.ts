import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import  httpStatus  from 'http-status';
import { config } from "dotenv";





const userLogin =catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result= await authService.userLogin(req.body);

    const{refreshToken}=result;
    res.cookie('refreshToken',refreshToken,{
        secure:false,
        httpOnly:true
    })
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successfully login',
        data:{
            accessToken:result.accessToken,
            needPasswordChange:result.needPasswordChange,
        }

    })
})

const refreshToken=catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {refreshToken}=req.cookies;
    // console.log(token)
    const result=await authService.refreshToken(refreshToken);
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:'successfully make refreshToken',
        data:result
    })
})

const changePassword =catchAsync(async(req:Request,res:Response)=>{

    const {}=req.params;
    const result= await authService.changePassword()
    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:'successfully make refreshToken',
        data:result
    })

})

const forgatPassword=catchAsync(async(req:Request,res:Response)=>{
    const{}=req.params;
    const result=await authService.forgatPassword()
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successfully forgatPassword...',
        data:result,
    })
})

export const authController ={
    userLogin,
    refreshToken,
    changePassword,
    forgatPassword,
}