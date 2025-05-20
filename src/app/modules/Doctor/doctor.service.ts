import { Doctor } from "@prisma/client";
import prisma from "../../../shared/prisma"


const getAllFromDB=async()=>{
    //pagination
    // take the search by data 
    // take doctorWhereInput type array in andCondition
    //find all data 

}
const getByIdFromDB=async(id:string)=>{
   const result=await prisma.doctor.findUniqueOrThrow({
    where:{id,isDeleted:false}
   }) 
   return result;
}
const updateIntoDB=async(id:string,data:Partial<Doctor>)=>{
    //find the doctor by id 
    await prisma.doctor.findUniqueOrThrow({
        where:{id,isDeleted:false}
    })

    // update the about doctor in doctor table 
    // update specialty in specialty table(use transaction)

    //find the updated data and return that 
}
const deleteFromDB=async()=>{
    //delete from doctor and user table 
}
const softDelete=async()=>{
// update in doctor and user table status deleted and is deleted true
}
export const doctorService={
    
    
    updateIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
    softDelete
}