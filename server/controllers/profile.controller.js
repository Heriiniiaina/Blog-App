import { User } from "../models/user.model.js";
import {ErrorHandler} from "../middlewares/errorHandler.js"
export const updateUserProfile = async (req,res,next)=>{
    try {
        const {email} = req.body
        const image = req.file.path
       
        if(!image) 
            throw new ErrorHandler("Erreur imege",400)
        if(!email)
            throw new ErrorHandler("Veuillez remplir",400)
        const user = await User.findOne({email:email})
        if(!user)
            throw new ErrorHandler("Auccun user avec cette email",404)
        user.image = image
        await user.save()
        res.status(200).json({
            message:"ok",
            image
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}