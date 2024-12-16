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