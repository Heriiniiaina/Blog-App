import { ErrorHandler } from "../middlewares/errorHandler.js"
import { Commententary } from "../models/comment.model.js"
import { getCommentaryByPostId } from "../services/comment.service.js"

export const addComment = async(req,res,next)=>{
    const {content,userId,postId}=req.body
    
    if(!content)
        return next(new ErrorHandler("Veuillez remplir le contenu",400))
    if(!userId)
        return next(new ErrorHandler("Veuillez se connecter pour poster",400))
    if(!postId)
        return next(new ErrorHandler("Auccun post",404))
    try {
        const comment =  new Commententary({
            content,
            user:userId,
            post:postId
        })
        await comment.save()
        res.status(200).json({
            success:true,
            message:"Commentaire posté"
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

export const getPostCommentary = async(req,res,next)=>{
    const postId = req.params.postId
    if(!postId)
        return next(new ErrorHandler("Auccun post",404))
    try {
        const comment = await getCommentaryByPostId(postId)
        res.status(200).json({
            success:true,
            comment
        })
    } catch (error) {
        next(new ErrorHandler(error.message,error.statusCode))
    }
    
}