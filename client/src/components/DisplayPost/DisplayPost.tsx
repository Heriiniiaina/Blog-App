import { useEffect, useState } from "react"
import { POST } from "../../Constants/PostInterface"
import { User } from "../../Constants/UserInterface"
import { UserApi } from "../../api/user.api"
import {getDate} from "../../services/data.service"
import Like from "../Like/Like"
import Comment from "../Comment/Comment"
import PostComment from "../PostComment/PostComment"
import { CommentApi } from "../../api/comment.api"
import { COMMENT } from "../../Constants/CommentInterface"
interface DisplayPostProps {
    posts: POST
}

const DisplayPost = ({posts}:DisplayPostProps) => {
  const [user,setUser] = useState<User>()
  const [comment,setComment] = useState<COMMENT[]>([])
  useEffect(()=>{
    const getUser = async()=>{
      try {
        const res = await UserApi.getUser(posts.user)
        const commt = await CommentApi.getPostComment(posts._id)
        setComment(commt.comment)
        setUser(res.user)
      } catch (error) {
        console.log(error)
      }
      
      
    }
    getUser()
  },[])
  
  return (
    <div className="flex flex-col bg-[#ffffff] md:w-[600px] p-5 m-6 rounded-md gap-3 shadow-md shadow-gray-400">
        <div className="user flex items-center gap-4" >

          <img src={user?.image} alt="user" className="w-[50px] h-[50px] rounded-full"/>
          <div>
            <h3 className="text-xl font-bold">{user?.nom} {user?.prenom}</h3>
            <h5 className="text-sm">{getDate(posts.createdAt)}</h5>
          </div>
          
        </div>
        <div className="post">
          <h1>{posts.content}</h1>
          
          {
            posts.image && <img src={posts.image} alt="post" className="w-[250px] h-[250px]"/>
          }
        </div>
        <div className="flex items-center justify-between">
          <Like like={posts.like.length} isLiked={false} userId={user?.userId ? user.userId : ""} postId={posts._id}/>
          <Comment comment={comment.length}/>
        </div>
        <hr />
        <PostComment user={user} post={posts}/>
    </div>
  )
}

export default DisplayPost