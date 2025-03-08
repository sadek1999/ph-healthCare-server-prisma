
import express  from 'express';
import { userController } from './user.controller';


const router=express.Router()

router.post('/createAdmin',userController.createAdmin);

export const userRoute=router;