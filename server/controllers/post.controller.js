import { ErrorHandler } from "../middlewares/errorHandler.js"
import { postSchema } from "../middlewares/validator.js"
import { getUserById } from "../services/auth.service.js"
import { createNewPost, getAllPost, getPostByUserId } from "../services/post.service.js"

export const addNewPost = async(req,res,next)=>{
    const {content,userId} = req.body
    const image = req.file.path | ""
    if(!content)
        return next(new ErrorHandler("Veuillez repmlir le champ",400))
    try {
        const user = await getUserById(userId)
        const {error} = postSchema.validate({content})
        if(error)
            throw new ErrorHandler(error.details[0].message)
        const post = await createNewPost({content,userId:user._id,image})
        res.status(201).json({
            message:"Poste créé",
            success:true,
            post
        })
    } catch (error) {
        console.log(error)
        next(new ErrorHandler(error.message,error.statusCode))
    }
}

export const allPosts = async(req,res,next)=>{
    try {
        const posts = await getAllPost()
        res.status(200).json({
            posts
        })
    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}
export const getUserPosts = async(req,res,next)=>{
    const {userId} = req.body
    if(!userId)
        return next(new ErrorHandler("Auccun post",404))
    try {
        const posts = await getPostByUserId(userId)
        res.status(200).json({
            posts
        })
    } catch (error) {
        next(new ErrorHandler(error.message))
    }
}