import { ErrorHandler } from "../middlewares/errorHandler.js"
import { registerSchema } from "../middlewares/validator.js"
import { User } from "../models/user.model.js"
import { createNewUser, getAllUserInfo, getUserDataByEmail } from "../services/auth.service.js"
import { comparePassword } from "../utils/bcrypt.config.js"
import { hashCode } from "../utils/hashCode.helper.js"
import { transport } from "../utils/sendEmail.helper.js"
import { generateToken } from "../utils/token.helper.js"

export const register = async(req,res,next)=>{
    const {nom,prenom,email,password,addresse} = req.body
    if(!nom | !prenom | !email | !password)
        return next(new ErrorHandler("Veuillez remplir le formulaire",400))
    try {
        const {error} = registerSchema.validate({nom,prenom,email,password})
        if(error)
            return next(new ErrorHandler(error.details[0].message,400))
        const user= await createNewUser({nom,prenom,email,password,addresse})
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

export const sendVerificationCode = async(req,res,next)=>{
    const {email} = req.body
    if(!email)
        return next(new ErrorHandler("Non autorisé",403))
    try {
        const user = await getAllUserInfo(email)
        if(user.verified)
            throw new ErrorHandler("Utilisateur déja verifié",400)
        const code = Math.floor(Math.random() * 1000000).toString()
        const info = transport.sendMail({
            from:process.env.SENDING_EMAIL_ADRESS,
            to:user.email,
            subject:"Verification code",
            html:"<h1>" + code + "</h1>"
        })
        if((await info).accepted==user.email){
            const hashedCode = hashCode(code,process.env.HMAC_KEY)
            user.verificationCode = hashedCode
            user.verificationCodeValidity = Date.now()
            await user.save()
            return res.status(200).json({
                success:true,
                message:"Code envoyer à votre email"
            })
        }
        throw new ErrorHandler("Il y a une erreur")
    } catch (error) {
        console.log(error)
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

export const verifyVerifiacationCode = async(req,res,next)=>{
    const {email,code} =req.body
    if(!code) 
        return new ErrorHandler("Veuillez entrer le code",400)
    try {
        const user = await getAllUserInfo(email)
        if(user.verified)
            throw new ErrorHandler("utilisateur déja verifié",400)
        if(Date.now() - user.verificationCodeValidity > 10 * 60000)
            throw new ErrorHandler("Code expiré",400)
        const hashedCode = hashCode(code,process.env.HMAC_KEY)
        if(hashedCode != user.verificationCode)
            throw new ErrorHandler("Code incorrect",400)
        user.verified = true
        user.verificationCode = undefined
        user.verificationCodeValidity = undefined
        await user.save()
        res.status(200).json({
            success:true,
            message:"Compte verifié avec succée"
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

export const logout = async(req,res,next)=>{
    try {
        res.clearCookie("Authorization").status(200).json({
            success:true,
            message:"Deconnexion reussi"
        })
    } catch (error) {
        next(new ErrorHandler(error.message))   
    }
   
}
export const sendForgotPasswordCode = async(req,res,next)=>{
    const {email} = req.body
    if(!email)
        return next(new ErrorHandler("Veuillez entrer votre email",400))
    try {
        const user = getAllUserInfo(email)
        if(!user)
            next(new ErrorHandler("Auccun utilisateur avec cette email",404))
        const code = Math.floor(Math.random() * 1000000).toString()
        const hashedCode = hashCode(code,process.env.HMAC_KEY)
        const info = transport.sendMail({
            from:process.env.SENDING_EMAIL_ADRESS,
            to:user.email,
            subject:"Reset password code",
            html:"<h1>" + code + "</h1>"
        })
        if((await info).accepted==user.email){
            user.forgotPasswordCode = hashedCode
            user.forgotPasswordCodeValidity = Date.now()
            user.save()
            return res.status(200).json({
                success:true,
                message:"code envoyer a votre email"
            })
        }
        throw new ErrorHandler("Quelque chose s'est mal passé",500)
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}
export const verifyForgotPasswordCode = async(req,res,next)=>{
    const {email,code} = req.body
    if(!email || !code)
        return next(new ErrorHandler("Veuillez remplir les informations",400))
    try {
        const user = await getAllUserInfo(email)
        if(!user) 
            throw new ErrorHandler("Auccun utilisateur avec cette email",404)
        if(Date.now() - user.forgotPasswordCodeValidity > 5 * 3600000)
            throw new ErrorHandler("Code expiré!",400)
        const hashedCode = hashCode(code,process.env.HMAC_KEY)
        if(hashedCode !== user.forgotPasswordCode)
            throw new ErrorHandler("Code incorrect",400)
        user.forgotPasswordCode = undefined
        user.forgotPasswordCodeValidity = undefined
        user.save()
        res.status(200).json({
            success:true,
            message:"Code correct"
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

