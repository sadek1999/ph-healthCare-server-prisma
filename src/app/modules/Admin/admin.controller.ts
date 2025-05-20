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
    message:'find the user successfully',
    data:result
  })
})

const updateIntoDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.updateIntoDB(id,req.body)
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'successfully update the user',
    data:result
  })
})

const deleteFromDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.deleteFromDB(id);
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'successfully delete the admin',
    data:result
  })
})

const softDeleteFromDB=catchAsync(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result= await adminService.softDeleteFromDB(id);
  sendResponse(res,{
    success:true,
    statusCode:httpStatus.OK,
    message:'successfully softDeleted the admin',
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