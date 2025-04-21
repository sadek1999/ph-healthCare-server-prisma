import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import { doctorService } from "./doctor.service"
import sendResponse from "../../../shared/sendResponse";
import  httpStatus  from 'http-status';



const updateIntoDB=catchAsync(async(req:Request,res:Response)=>{
    const result= await doctorService.updateIntoDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})
const getAllFromDB=catchAsync(async(req:Request,res:Response)=>{
    const result= await doctorService.updateIntoDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const getByIdFromDB=catchAsync(async(req:Request,res:Response)=>{
    const result= await doctorService.updateIntoDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const deleteFromDB=catchAsync(async(req:Request,res:Response)=>{
    const result= await doctorService.updateIntoDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const softDelete=catchAsync(async(req:Request,res:Response)=>{
    const result= await doctorService.updateIntoDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})
export const doctorController={
    updateIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
    softDelete
}