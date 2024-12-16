import { ErrorHandler } from "../middlewares/errorHandler.js"
import { getUserById } from "../services/auth.service.js"

export const addNewPost = async(req,res,next)=>{
    const {content,userId} = req.body
    if(!content)
        return next(new ErrorHandler("Veuillez repmlir le champ",400))
    try {
        const user = await getUserById(userId)

    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}