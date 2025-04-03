
import  express  from 'express';
import { userRoute } from '../modules/user/user.routes';
import path from 'path';
import { adminRoute } from '../modules/Admin/admin.routes';


const router=express.Router()


const moduleRoutes=[
    {
        path:'/user',
        route:userRoute,
    },
    {
        path:'/admin',
        route:adminRoute,
    },
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;