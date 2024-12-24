import axios from "axios";

const BASE_URL = "http://localhost:8000/blog/post"
export class PostApi {
    static  getAllpost = async()=>{
        return (await axios.get(`${BASE_URL}/get-all-post`)).data
    }
    
}