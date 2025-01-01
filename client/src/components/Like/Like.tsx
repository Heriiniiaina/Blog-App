
import { FaHeart, FaRegHeart } from "react-icons/fa"

interface LikeProps{
    like:number,
    isLiked:boolean
}
const Like = ({like,isLiked}:LikeProps) => {
  return (
    <div className="">
        <div className="flex items-center gap-2">
            {isLiked ?<button><FaHeart className="text-[18px] text-red-500"/> </button> : <button><FaRegHeart className="text-[18px] text-red-500"/></button> }
            <p className="text-[18px]">{like}</p>
        </div>
       
    </div>
  )
}

export default Like