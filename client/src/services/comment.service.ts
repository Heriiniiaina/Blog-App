import { CommentApi } from "../api/comment.api"
import { COMMENT } from "../Constants/CommentInterface"

export const getComment = async(postId:string)=>{
    try {
     
      const commt = await CommentApi.getPostComment(postId)
      
        return commt.comment
    } catch (error) {
      console.log(error)
    }
    
  }