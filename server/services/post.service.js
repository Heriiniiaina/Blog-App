import { ErrorHandler } from "../middlewares/errorHandler.js";
import { Post } from "../models/post.model.js";

export const createNewPost = async (postData)=>{
    try {
        const post = new Post({
            content:postData.content,
            image:postData.image,
            user:postData.userId
        })
        await post.save()
        return post
    } catch (error) {
        throw new ErrorHandler(error.message)
    }
}

