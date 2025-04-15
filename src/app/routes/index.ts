
import  express  from 'express';
import { userRoute } from '../modules/user/user.routes';

import { adminRoute } from '../modules/Admin/admin.routes';
import { authRoute } from '../modules/Auth/auth.route';


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
    {
        path:"/auth",
        route:authRoute,
    },
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;