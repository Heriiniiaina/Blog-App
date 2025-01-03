

import React from "react";
import { POST } from "../../Constants/PostInterface";
import { User } from "../../Constants/UserInterface";

import InputCustom from "../InputCutom/InputCustom";
import { BiSend } from "react-icons/bi";
import { CommentApi } from "../../api/comment.api";


interface PostCommentProps {
    user?:User,
    post?:POST
}


const PostComment = ({user,post}:PostCommentProps) => {
    
    const [comment,setComment] = React.useState<string>("")
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setComment(e.target.value)
    }
    const postComment = async (e:React.FormEvent)=>{
        e.preventDefault()
        console.log("user = " +  user?.userId);
        try {
            const res = await CommentApi.addComment(user?.userId as string,comment,post?._id as string)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <div className="my-3 w-full">
        <form action="" onSubmit={postComment} className="flex items-center  relative w-full">
                <img src={user?.image} alt="" className="w-[35px] h-[35px] rounded-full absolute left-1"/>
                <InputCustom onChange={onChange} name="comment" className="outline-none border pl-11 p-4 w-full rounded"   placeHolder="Quelque chose à dire" type="text" />
                
                <button type="submit"><BiSend className="absolute right-5 text-blue-500 top-4 text-2xl cursor-pointer"/> </button> 
        </form>
    </div>
  )
}

export default PostComment