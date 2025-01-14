import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { POST } from "../../Constants/PostInterface"

interface DISPLAYUSERPOST{
    userID:string,
    posts:POST[]
}

const DisplayUserPost = ({userID}:DISPLAYUSERPOST) => {
    const posts = useSelector((store:RootState)=>store.posts.posts)
    console.log(posts)
    return (
    <div>DisplayUserPost</div>
  )
}

export default DisplayUserPost