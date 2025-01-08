import { useEffect } from "react"
import { PostApi } from "../../api/post.api"
import { useDispatch, useSelector } from "react-redux"
import { setPost } from "../../store/slices/post.slice"
import { RootState } from "../../store/store"
import { POST, POSTAPI } from "../../Constants/PostInterface"
import DisplayPost from "../DisplayPost/DisplayPost"
import toast from "react-hot-toast"
import { jwtDecode } from "jwt-decode"



const Acutality = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const getPost = async()=>{
        try {
            const post = await PostApi.getAllpost()  as POSTAPI
            const posts = jwtDecode(post.token) as POST[]
            dispatch(setPost(posts))
           console.log(post.posts)
        } catch (error:any) {
           
            toast.error(error.response.data.message)
        }
    }
    getPost()
  },[])
  const posts:POST[] = useSelector((store:RootState)=>store.posts.posts)
  return (
    <div className="w-[100%] ">
        {
          posts.map((post)=><DisplayPost posts={post} key={post._id}/>)
        }
    </div>
  )
}

export default Acutality