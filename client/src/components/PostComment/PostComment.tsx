

import { User } from "../../Constants/UserInterface";

import InputCustom from "../InputCutom/InputCustom";
import { BiSend } from "react-icons/bi";


interface PostCommentProps {
    user?:User
}


const PostComment = ({user}:PostCommentProps) => {
   
    return (
    <div className="my-3 w-full">
        <form action="" className="flex items-center  relative w-full">
                <img src={user?.image} alt="" className="w-[35px] h-[35px] rounded-full absolute left-1"/>
                <InputCustom name="comment" className="outline-none border pl-11 p-4 w-full rounded"   placeHolder="Quelque chose à dire" type="text" />
                <BiSend className="absolute right-5 text-blue-500 top-4 text-2xl cursor-pointer"/>  
        </form>
    </div>
  )
}

export default PostComment