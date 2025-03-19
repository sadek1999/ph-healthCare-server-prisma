import { Admin } from "@prisma/client";



const getAdminFromDB=async(req:any,res:any)=>{
    return res;
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
    getAdminFromDB,
    getByIdFromDB,
    deleteFromDB,
}