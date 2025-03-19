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
const getUsers=async(req:Request,res:Response)=>{
  const result = await userService.getUsers(req)
}

export const userController={
    createAdmin,
    getUsers,
}