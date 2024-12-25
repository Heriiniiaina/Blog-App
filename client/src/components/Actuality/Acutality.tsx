import { useEffect } from "react"
import { PostApi } from "../../api/post.api"
import { useDispatch } from "react-redux"
import { setPost } from "../../store/slices/post.slice"



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
  return (
    <div>
        sas
    </div>
  )
}

export default Acutality