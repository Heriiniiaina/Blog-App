import { COMMENT } from "../../Constants/CommentInterface"

interface CommentProps{
    comment:COMMENT
}

const DisplayComment = ({comment}:CommentProps) => {
  return (
    <div className="flex flex-col gap-3 p-2 m-4">
            <div className="flex items-center gap-2">
                <img className="w-[40px] h-[40px] rounded-full" src={comment.user.image} alt="" />
                <p>{comment.user.nom} {comment.user.prenom}</p>
            </div>
            <div>
                <p>{comment.content}</p>
            </div>
    </div>
  )
}

export default DisplayComment