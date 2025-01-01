import axios from "axios";

const BASE_URL = "http://localhost:8000/blog/comment"
export class CommentApi{
    static  addComment= async(userId:string,content:string,postId:string)=>{
        return (await axios.post(`${BASE_URL}/add-comment`,{userId:userId,content:content,postId:postId})).data
    }
}