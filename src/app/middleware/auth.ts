import { NextFunction, Request, Response } from "express";
import { jwtHelper } from "../../helpars/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";
import ApiError from "../errors/ApiError";
import  httpStatus  from 'http-status';

 
 export const auth=(...roles:string[])=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
    
        try{
            const token=req.headers.authorization;
         
            if(!token){
                throw new ApiError(httpStatus.UNAUTHORIZED,'you are unauthorized ..')
            }
            
            const verifiedUser=jwtHelper.verifyToken(token,config.jwt.jwt_secret as Secret)
           
            
            if(roles.length && !roles.includes(verifiedUser.role)){
               throw new ApiError(httpStatus.FORBIDDEN,'unauthorized...')
            }
            
            next()
            }
            catch(err){
                next(err)
            }
        }
    
    
    }