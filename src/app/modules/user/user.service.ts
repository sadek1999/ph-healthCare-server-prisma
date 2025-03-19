import { Admin, userRole } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { Request } from "express";
import prisma from "../../../shared/prisma";



const createAdmin=async(req:Request):Promise<Admin>=>{
   

    const hasPassword=await bcrypt.hash(req.body.password,12);
    const userData ={
        email:req.body.email,
        password:hasPassword,
       role:userRole.admin


    }

    const result= await prisma.$transaction(async(transactionClient)=>{

        await transactionClient.user.create({
            data:userData
        })

        const createAdmin=await transactionClient.admin.create({
            data:req.body
        })

        return createAdmin;
    })
    return result;

    }

    const getUsers=async(req:Request)=>{
        console.log("from userService")
    }

export const userService={
    createAdmin,
    getUsers,
}