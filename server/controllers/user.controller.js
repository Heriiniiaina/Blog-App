import { ErrorHandler } from "../middlewares/errorHandler.js"
import { getUserById } from "../services/auth.service.js"

export const getUserInfo = async(req,res,next)=>{
    const userId = req.params.userId
    try {
        const user = await getUserById(userId)
        res.status(200).json({
            success:true,
            user:{
                userId:user._id,
                nom:user.nom,
                prenom:user.prenom,
                email:user.email,
                addresse:user.addresse,
                image:user.image
            }
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}