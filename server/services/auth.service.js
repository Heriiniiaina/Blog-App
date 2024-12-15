import { User } from "../models/user.model.js"
import { hashPassword } from "../utils/bcrypt.config.js"

export const createNewUser = async(userData)=>{
    try {
        const passowrd = await hashPassword(userData.passowrd)
        const user = new User({
            nom:userData.nom,
            prenom:userData.prenom,
            email:userData.email,
            passowrd:passowrd
        })
        await user.save()
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}