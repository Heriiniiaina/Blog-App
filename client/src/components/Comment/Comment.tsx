import { useNavigate } from "react-router-dom"
import { POST } from "../../Constants/PostInterface"


type Props = {
    comment:number,
    post:POST
}

const Comment = ({comment,post}:Props) => {
  const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate(`/post/${post._id}`)} className="cursor-pointer">{comment > 1 ? `${comment} comment`: `${comment} comments`}</button>
    </div>
  )
}

export default Comment