
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { POST } from "../../Constants/PostInterface"
import { PostApi } from "../../api/post.api"


const DisplayUserPost = () => {
    const {id} = useParams()
    const [posts,setPosts] = useState<POST[]>()
    useEffect(()=>{
     const fetchUserPost = async ()=>{
     
        if (!id) {
          
          return; 
        }
        try {
          const res = await PostApi.getUserPost(id)
          const post = res.posts as POST[]
          setPosts(post)

        } catch (error) {
          
        }
     }
     fetchUserPost()
    }, [])
    console.log(posts)
    return (
    <div> {id}</div>
  )
}

export default DisplayUserPost