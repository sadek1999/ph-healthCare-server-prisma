
import express  from 'express';
import { userController } from './user.controller';
import { Response } from 'express';
import { Request } from 'express';


const router=express.Router()


router.post('/createAdmin',userController.createAdmin);
router.get("/",userController.getUsers)


      

export const userRoute=router;