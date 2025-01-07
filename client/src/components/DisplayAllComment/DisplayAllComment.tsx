import { COMMENT } from "../../Constants/CommentInterface"
import DisplayComment from "../DisplayComment/DisplayComment"

interface DisplayAllCommentProps {
    comments:COMMENT[]

}

const DisplayAllComment = ({comments}:DisplayAllCommentProps) => {
  return (
    <>
        {
            comments.map((comment,index)=>(
                <DisplayComment key={index} comment={comment}/>
            ))
        }
    </>
  )
}

export default DisplayAllComment