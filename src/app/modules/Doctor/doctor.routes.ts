

import  express  from "express";
import { doctorController } from "./doctor.controller";


const router=express.Router()

router.get('/',doctorController.getAllFromDB)
router.get('/:id',doctorController.getByIdFromDB)
router.patch('/:id',doctorController.updateIntoDB)
router.delete("/:id",doctorController.deleteFromDB)
router.delete("/soft/:id",doctorController.softDelete) 
export const DoctorRoute=router;