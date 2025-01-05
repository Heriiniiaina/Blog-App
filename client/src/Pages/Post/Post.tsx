import {useParams} from "react-router-dom"
import { getPost } from "../../services/post.service"



const Post = () => {
  const {id} = useParams()
  const post  = getPost(id)
  console.log(post)
    return (
    <div>Post {id}</div>
  )
}

export default Post