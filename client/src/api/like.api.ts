import axios from "axios"

const BASE_URL = "http://localhost:8000/blog/like"
export class LikeApi{
    static async likePost(postId:string,userId:string){
        return (await axios.patch(`${BASE_URL}/like-post`,{postId:postId,userId})).data
    }
    static async unlikePOst(postId:string,userId:string){
        return (await axios.patch(`${BASE_URL}/unlike-post`,{postId:postId,userId})).data
    }
}