import { useSelector } from "react-redux"
import { POST } from "../Constants/PostInterface"
import { RootState } from "../store/store"


export const getPost = (id?:string):POST=>{
    const post = useSelector((store:RootState)=>store.posts.posts.find((post)=>post._id === id)) as POST
    return post
}