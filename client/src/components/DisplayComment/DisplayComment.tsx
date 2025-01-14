import { COMMENT } from "../../Constants/CommentInterface"
import { getDate } from "../../services/data.service"

interface CommentProps{
    comment:COMMENT
}

const DisplayComment = ({comment}:CommentProps) => {
  return (
    <div className="flex flex-col gap-3 p-2 m-6 shadow-sm shadow-slate-400">
            <div className="flex items-center gap-2">
                <img className="w-[40px] h-[40px] rounded-full" src={comment.user.image} alt="" />
                <div>
                  <p className="text-sm">{comment.user.nom} {comment.user.prenom}</p>
                  <p className="text-[10px]">{getDate(comment.createdAt)}</p>
                </div>
               
            </div>
            <div>
                <p>{comment.content}</p>
            </div>
    </div>
  )
}

export default DisplayComment