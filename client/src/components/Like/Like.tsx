
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { LikeApi } from "../../api/like.api"
import { User } from "../../Constants/UserInterface"
import { getUser } from "../../services/user.service"

interface LikeProps{
    like:number,
    isLiked:boolean,
    postId:string,
   
}
const Like = ({like,isLiked,postId}:LikeProps) => {
  const user = getUser() as User
  const handleLike = async()=>{
    isLiked = !isLiked
    console.log(postId)
    console.log(user?.userId)
    try {
        const liked =await LikeApi.likePost(postId,user?.userId)
        console.log(liked)
    } catch (error) {
      console.log(error)
    }  
  }
  return (
    <div className="">
        <div className="flex items-center gap-2">
            {isLiked ?<button ><FaHeart className="text-[18px] text-red-500"/> </button> : <button><FaRegHeart className="text-[18px] text-red-500" onClick={handleLike}/></button> }
            <p className="text-[18px]">{like} Likes</p>
        </div>
       
    </div>
  )
}

export default Like