import { ErrorHandler } from "../middlewares/errorHandler.js"
import { User } from "../models/user.model.js"
import { hashPassword } from "../utils/bcrypt.config.js"

export const createNewUser = async(userData)=>{
    try {
        const password = await hashPassword(userData.password)
        const user = new User({
            nom:userData.nom,
            prenom:userData.prenom,
            email:userData.email,
            password:password
        })
        await user.save()
        return user
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

export const getUserDataByEmail = async(email)=>{
        const user = await User.findOne({email:email}).select("+password")
        if(!user){
            throw new ErrorHandler("Auccun utilisateur est enregistré avec cette email",404)
        }
        return user
}

export const getAllUserInfo = async(email)=>{
    const user =  await User.findOne({email:email}).select("+verificationCode +verificationCodeValidity")
    if(!user)
        throw new ErrorHandler("Auccun utilisateur est enregistré avec cette email",404)
    return user
}
export const getUserById = async(userId)=>{
    const user = await User.findById(userId)
    if(!user)
        throw next("Utilisateur non trouvé",404)
    return user
}