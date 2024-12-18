import { ErrorHandler } from "../middlewares/errorHandler"
import { getPostById } from "../services/post.service"

export const likePost = async(req,res,next)=>{
    const {userId,postId} = req.body
    if(!userId || !postId){
        return next(new ErrorHandler("Auccun post ou user",404))
    }
    try {
        const post = await getPostById(postId)
        const like = {
            user:userId,
            post:postId
        }
        post.push(like)
        await post.save()
        res.status(200).json({
            success:true,
            message:"Like ajouté"
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}