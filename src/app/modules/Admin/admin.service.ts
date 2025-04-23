import { Admin, Prisma, userStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IAdminFilterRequest } from "./admin.interface";
import { IPaginationOptions } from "../../interfaces/pagination";
import { CalculatePagination } from "../../../helpars/paginationHelper";
import { adminSearchAblFields } from "./admin.const";

const getAllFromDB = async (
  params: IAdminFilterRequest,
  options: IPaginationOptions
) => {
  // console.log(params)
  const { page, limit, skip } = CalculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.AdminWhereInput[] = [];
  if (searchTerm) {
    andConditions.push({
      OR: adminSearchAblFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }
  const whereAndConditions: Prisma.AdminWhereInput = { AND: andConditions };
  console.log(whereAndConditions);

  const result = await prisma.admin.findMany({
    where: whereAndConditions,
  });

  const total = await prisma.admin.count({
    where: whereAndConditions,
  });
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getByIdFromDB = async (id: string) => {
  const result = await prisma.admin.findUniqueOrThrow({
    where: {
      id: id,
      isDeleted: false,
    },
  });

  return result;
};

const updateIntoDB = async (id: string, data: Partial<Admin>) => {
  //  find the admin
  const adminInfo = await prisma.admin.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
  });
  let updatedData;
  //update the admin if find that
  if (adminInfo) {
    updatedData = await prisma.admin.update({
      where: {
        id,
      },
      data,
    });
  }

  return updatedData;
};

const deleteFromDB = async (id: string) => {
  await prisma.admin.findUniqueOrThrow({
    where: { id, isDeleted: false },
  });

  const result = await prisma.$transaction(async ($transactionClient) => {
    const adminDeleted = await $transactionClient.admin.delete({
      where: { id },
    });

    await $transactionClient.user.delete({
      where: { id },
    });
    return adminDeleted;
  });
  return result;
};

const softDeleteFromDB = async (id: string) => {

   await prisma.admin.findUniqueOrThrow({
    where:{id,isDeleted:false}
   })

   const result= await prisma.$transaction(async($transactionClient)=>{

    const adminSoftDeleted=await $transactionClient.admin.update({
      where:{id}
      ,data:{isDeleted:true}
    })

    await $transactionClient.user.update({
      where:{id},
      data:{status:userStatus.blocked}
    })
    return adminSoftDeleted;
   })

  
  return result;
};

export const adminService = {
  getAllFromDB,
  getByIdFromDB,
  deleteFromDB,

  updateIntoDB,

  softDeleteFromDB,
};
