import { ErrorHandler } from "../middlewares/errorHandler.js"
import { registerSchema } from "../middlewares/validator.js"
import { User } from "../models/user.model.js"
import { createNewUser, getUserDataByEmail } from "../services/auth.service.js"
import { comparePassword } from "../utils/bcrypt.config.js"
import { generateToken } from "../utils/token.helper.js"

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
        console.log(error)
        next(new ErrorHandler(error.message))
    }
}
export const login = async(req,res,next)=>{
    const {email,password} =req.body
    if(!email || !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    try {
        const user = await getUserDataByEmail(email)
        const isMatch = await comparePassword(password,user.password)
        if(!isMatch)
            throw new ErrorHandler("Mot de passe incorrect",400)
        const token = generateToken(user)
        res.cookie("Authorization",token,{expireIn:Date.now() + 8  *360000,httpOnly:process.env.NODE_ENV=="production",secure:process.env.NODE_ENV=="production"})
        .json({
            success:true,
            message:"connexion reussi",
            token
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

