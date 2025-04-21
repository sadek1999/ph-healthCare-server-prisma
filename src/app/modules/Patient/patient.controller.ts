import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import { patientService } from "./patient.service"
import sendResponse from "../../../shared/sendResponse";
import  httpStatus  from 'http-status';

const getAllFromDB=catchAsync(async(req:Request,res:Response)=>{
    const result=await patientService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
});

const getByIdFromDB=catchAsync(async(req:Request,res:Response)=>{
    const result=await patientService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const updateIntoDB=catchAsync(async(req:Request,res:Response)=>{
    const result=await patientService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const deleteFromDB=catchAsync(async(req:Request,res:Response)=>{
    const result=await patientService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const softDelete=catchAsync(async(req:Request,res:Response)=>{
    const result=await patientService.getAllFromDB();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'',
        data:result
    })
})

const patientController={
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    softDelete,
}