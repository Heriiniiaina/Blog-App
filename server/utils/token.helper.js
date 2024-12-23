import { config } from "dotenv"
import jwt from "jsonwebtoken"
config()

export const generateToken =(user)=>{
    const userData = {
        userId:user._id,
        nom:user.nom,
        prenom:user.prenom,
        email:user.email,
        verified:user.verified,
        image:user.image
    }
    const token =  jwt.sign(userData,process.env.TOKEN_SECRET,{expiresIn:"8h"})
    return token
}

