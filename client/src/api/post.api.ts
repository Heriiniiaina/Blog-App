import axios from "axios";

const BASE_URL = "http://localhost:8000/blog/post"
export class PostApi {
    static  getAllpost = async()=>{
        return (await axios.get(`${BASE_URL}/get-all-post`)).data
    }
    static  addNewPost = async(formData:FormData)=>{
        return (await axios.post(`${BASE_URL}/add-new-post`,formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })).data
    }
    static addComment = async()=>{
        
    }
}