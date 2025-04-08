import { Admin, Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IAdminFilterRequest } from "./admin.interface";
import { IPaginationOptions } from "../../interfaces/pagination";
import { CalculatePagination } from "../../../helpars/paginationHelper";
import { adminSearchAblFields } from "./admin.const";




const getAllFromDB=async(params:IAdminFilterRequest,options:IPaginationOptions)=>{
// console.log(params)
    const {page,limit,skip}=CalculatePagination(options);
    const {searchTerm,...filterData}=params;

    const andConditions :Prisma.AdminWhereInput[]=[]
   if(searchTerm){
        andConditions.push({
            OR:adminSearchAblFields.map(field=>({
                [field]:{
                    contains:params.searchTerm,
                    mode:'insensitive'
                }
            }))
        })
   }
  
   if(Object.keys(filterData).length>0){
    andConditions.push({
        AND:Object.keys(filterData).map(key=>({
            [key]:{
                equals:(filterData as any)[key]
            }
        }))
    })
   }
   const whereAndConditions :Prisma.AdminWhereInput={AND:andConditions}
   console.log(whereAndConditions)
    
    const result= await prisma.admin.findMany({
        where:whereAndConditions,
    })
    
    const total= await prisma.admin.count({
        where:whereAndConditions
    })
    return {
        meta:{
            page,
            limit,
            total
        },
        data:result,
    };
}
const getByIdFromDB =async(id:string)=>{
console.log('get single admin')
}

const updateIntoDB=async(id:string,data:Partial<Admin>)=>{
    console.log('update inot db')
}
const deleteFromDB=async(id:string)=>{
console.log('delete for db')
}

export const adminService={
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
}