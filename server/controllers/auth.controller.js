import { ErrorHandler } from "../middlewares/errorHandler.js"
import { registerSchema } from "../middlewares/validator.js"

export const register = async(req,res,next)=>{
    const {nom,prenom,email,password} = req.body
    if(!nom | !prenom | !email | !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    try {
        const {error} = registerSchema.validate({nom,prenom,email,password})
        if(error)
            return next(new ErrorHandler(error.details[0].message,400))
    } catch (error) {
        
    }
}