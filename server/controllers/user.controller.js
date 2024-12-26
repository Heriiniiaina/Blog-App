import { ErrorHandler } from "../middlewares/errorHandler.js"
import { getUserById } from "../services/auth.service.js"

export const getUserInfo = async(req,res,next)=>{
    const userId = req.params.userId
    try {
        const user = await getUserById(userId)
        res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}