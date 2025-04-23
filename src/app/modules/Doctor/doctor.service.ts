

const getAllFromDB=async()=>{
    //pagination
    // take the search by data 
    // take doctorWhereInput type array in andCondition
    //find all data 

}
const getByIdFromDB=async()=>{
    //find by the id 
}
const updateIntoDB=async()=>{
    //find the doctor by id 

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