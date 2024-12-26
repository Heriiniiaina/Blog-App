import { useEffect } from "react"
import { PostApi } from "../../api/post.api"
import { useDispatch, useSelector } from "react-redux"
import { setPost } from "../../store/slices/post.slice"
import { RootState } from "../../store/store"
import { POST } from "../../Constants/PostInterface"
import DisplayPost from "../DisplayPost/DisplayPost"



const Acutality = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getPost = async()=>{
        try {
            const post = await PostApi.getAllpost()
            dispatch(setPost(post))
            console.log(post)
        } catch (error) {
            console.log(error)
        }
    }
    getPost()
  },[])
  const posts:POST[] = useSelector((store:RootState)=>store.posts.posts)
  return (
    <div>
        {
          posts.map((post)=><DisplayPost posts={post} key={post._id}/>)
        }
    </div>
  )
}

export default Acutality