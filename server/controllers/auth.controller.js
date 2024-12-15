import { ErrorHandler } from "../middlewares/errorHandler.js"

export const register = async(req,res,next)=>{
    const {nom,prenom,email,password} = req.body
    if(!nom | !prenom | !email | !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    
}