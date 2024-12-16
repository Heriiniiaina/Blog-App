import multer from "multer";
import cloudinary from "./cloudinary.config.js";
import {CloudinaryStorage} from "multer-storage-cloudinary"

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: "blog_image", 
        allowed_formats: ["jpg", "png", "jpeg"],
    }
})

const upload = multer({storage})
export default upload