import { Request, Response } from "express"
import { adminService } from "./admin.service"



const createAdmin=async(req:Request,res:Response)=>{

    const result= await adminService.


}

export const adminController={
  createAdmin,
    
}