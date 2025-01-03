import { ErrorHandler } from "../middlewares/errorHandler"
import { Commententary } from "../models/comment.model"

export const getCommentaryByPostId = async (postId) => {
    
    try {
        if(!postId)
            throw new ErrorHandler("Auccun post",404)
        const comment = await Commententary.find({post:postId}).populate("user")
        return comment
    } catch (error) {
        throw new ErrorHandler(error.message,error.statusCode)
    }

}