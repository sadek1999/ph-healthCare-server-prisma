import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const createAdmin=async(req:Request,res:Response)=>{
  

    const result=await userService.createAdmin(req);
   
    
    sendResponse(res,{
        statusCode:httpStatus.CREATED,
        success:true,
        message:'admin created successfully',
        data:result
    })

}
const createDoctor=async(req:Request,res:Response)=>{

    const result=await userService.createAdmin(req);
    
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'admin created successfully',
        data:result
    })

}
const createPatient=async(req:Request,res:Response)=>{

    const result=await userService.createAdmin(req);
    
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'admin created successfully',
        data:result
    })

}
const getAllFromDB=async(req:Request,res:Response)=>{
    const result= await userService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'get all users',
        data:result,
    })
}
const changeProfileStatus=async(req:Request,res:Response)=>{
    const result= await userService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'get all users',
        data:result,
    })
}

const getMyProfile=async(req:Request,res:Response)=>{
    const result= await userService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'get all users',
        data:result,
    })
}
const updateMyProfile=async(req:Request,res:Response)=>{
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
   
   createDoctor,
    createPatient,
    getAllFromDB,
    changeProfileStatus,
    getMyProfile,
    updateMyProfile
}