
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { LikeApi } from "../../api/like.api"
import { User } from "../../Constants/UserInterface"
import { getUser } from "../../services/user.service"
import { useDispatch } from "react-redux"
import { PostApi } from "../../api/post.api"
import { setPost } from "../../store/slices/post.slice"

interface LikeProps{
    like:number,
    isLiked:boolean,
    postId:string,
    setIsLiked:(value: boolean) => void
   
}
const Like = ({like,isLiked,postId,setIsLiked}:LikeProps) => {
  const dispatch = useDispatch()
  const user = getUser() as User
  const handleLike = async()=>{
    setIsLiked(true)
    console.log(postId)
    console.log(user?.userId)
    try {
        const liked =await LikeApi.likePost(postId,user?.userId)
        const posts = await PostApi.getAllpost()
        dispatch(setPost(posts))
        console.log(liked)
    } catch (error) {
      console.log(error)
    }  
  }
  const removeLike = async()=>{
    setIsLiked(false)
    try {
        const liked =await LikeApi.unlikePOst(postId,user?.userId)
        const posts = await PostApi.getAllpost()
        dispatch(setPost(posts))
        console.log(liked)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(isLiked)
  return (
    <div className="">
        <div className="flex items-center gap-2">
            {isLiked ?<button ><FaHeart onClick={removeLike} className="text-[18px] text-red-500"/> </button> : <button><FaRegHeart className="text-[18px] text-red-500" onClick={handleLike}/></button> }
            <p className="text-[18px]">{like} Likes</p>
        </div>
       
    </div>
  )
}

export default Like