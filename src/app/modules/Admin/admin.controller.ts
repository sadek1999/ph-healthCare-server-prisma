import { Request, RequestHandler, Response } from "express"
import { adminService } from "./admin.service"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse";
import  httpStatus  from 'http-status';
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.const";



const getAllFromDB :RequestHandler=catchAsync(async(req:Request,res:Response)=>{

  const filters=pick(req.query,adminFilterableFields)
  const options=pick(req.query,['limit','page','sortBy','sortOrder'])
  // console.log(filters , options)
    const result=await adminService.getAllFromDB(filters , options);
    sendResponse(res,{
      success:true,
      statusCode:httpStatus.OK,
      message:'admin fiend successfully',
      meta:result.meta,
      data:result.data,
     
    })
})

const getByIdFromDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.getByIdFromDB(id)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'',
    data:result
  })
})

const updateIntoDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.getByIdFromDB(id)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'',
    data:result
  })
})

const deleteFromDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.getByIdFromDB(id)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'',
    data:result
  })
})

const softDeleteFromDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.getByIdFromDB(id)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'',
    data:result
  })
})


export const adminController={

    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    softDeleteFromDB
}