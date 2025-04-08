import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import  httpStatus  from 'http-status';


const userLogin =catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result= await authService.userLogin();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'successfully login',
        data:result

    })
})

export const authController ={
    userLogin,
}