import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createAdmin=async(req:Request,res:Response)=>{

    const result=await userService.createAdmin(req);
     console.log('for user controller')
     console.log(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'admin created successfully',
        data:result
    })

}
const getAllUserFromDB=async(req:Request,res:Response)=>{
    const result= await userService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'get all users',
        data:result,
    })
}

export const userController={
    createAdmin,
   getAllUserFromDB,
}