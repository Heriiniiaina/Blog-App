import { ErrorHandler } from "../middlewares/errorHandler.js"
import { postSchema } from "../middlewares/validator.js"
import { getUserById } from "../services/auth.service.js"
import { createNewPost } from "../services/post.service.js"

export const addNewPost = async(req,res,next)=>{
    const {content,userId} = req.body
    if(!content)
        return next(new ErrorHandler("Veuillez repmlir le champ",400))
    try {
        const user = await getUserById(userId)
        const {error} = postSchema.validate({content})
        if(error)
            throw new ErrorHandler(error.details[0].message)
        const post = await createNewPost({content,userId:user._id})
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