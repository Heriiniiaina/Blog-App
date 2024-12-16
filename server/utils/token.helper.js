import { config } from "dotenv"
import jwt from "jsonwebtoken"
config()

export const generateToken =(user)=>{
    const userData = {
        userId:user._id,
        nom:user.nom,
        prenom:user.prenom,
        email:user.email
    }
    const token =  jwt.sign(user,process.env.TOKEN_SECRET)
    return token
}