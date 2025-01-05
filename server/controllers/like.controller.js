import { ErrorHandler } from "../middlewares/errorHandler.js"
import { getPostById } from "../services/post.service.js"

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
        post.like.push(like)
        await post.save()
        res.status(200).json({
            success:true,
            message:"Like ajouté"
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

export const unlikePost=async(req,res,next)=>{
    const {userId,postId} = req.body
    if(!userId || !postId){
        return next(new ErrorHandler("Auccun post ou user",404))
    }
    try {
        const post = await getPostById(postId)
        if(!post)
            throw new ErrorHandler("Post non trouvé",404)
        const like = post.like.filter(l=>l.user===userId)
        post.like = like
        await post.save()
        res.status(200).json({
            success:true,
            message:"Like supprimé",
            post:post.like
        })
    } catch (error) {
        next (new ErrorHandler(error.message,error.statusCode))
    }
}