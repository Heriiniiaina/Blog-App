import { ErrorHandler } from "../middlewares/errorHandler.js"
import { registerSchema } from "../middlewares/validator.js"
import { createNewUser } from "../services/auth.service.js"

export const register = async(req,res,next)=>{
    const {nom,prenom,email,password} = req.body
    if(!nom | !prenom | !email | !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    try {
        const {error} = registerSchema.validate({nom,prenom,email,password})
        if(error)
            return next(new ErrorHandler(error.details[0].message,400))
        const user= await createNewUser({nom,prenom,email,password})
        res.status(201).json({
            success:true,
            message:"Compte créé avec succées"
        })
    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}