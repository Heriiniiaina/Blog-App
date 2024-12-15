import bcrypt from "bcrypt"

export const hashPassword=async (passowrd)=>{
    const salt = 12
    const hashedPassword = await bcrypt.hash(passowrd,salt)
    return hashedPassword
}