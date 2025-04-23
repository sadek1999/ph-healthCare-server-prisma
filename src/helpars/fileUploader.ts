

import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import path from 'path';



    // Configuration
    cloudinary.config({ 
        cloud_name: 'djtjncv1v', 
        api_key: '876449997756165', 
        api_secret: 'WWS7l4lrSvFdzJMYhB4GyQ1TxxA' // Click 'View API Keys' above to copy your API secret
    });

    const storage=multer.diskStorage({
        
        destination:function(req,file,cd){
           
            cd(null,path.join(process.cwd(),'uploads'))
        },
        filename:function(req,file, cd){
            cd(null,file.originalname)
        }
    })

    const upload=multer({storage:storage});


    const uploadToCloudinary=async()=>{
           
    }
    
    // Upload an image
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);
    
      

export const fileUploader={
    upload
}