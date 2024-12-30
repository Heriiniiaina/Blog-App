import axios from "axios";

axios.defaults.withCredentials = true
const BASE_URL = "http://localhost:8000/blog"



export class UserApi {
    static async getUser(userId:string){
        return ( await axios.get(`${BASE_URL}/profile/get-user/${userId}`) ).data
    }
    static async getFriends(userId:string){
        return ( await axios.get(`${BASE_URL}/friend/get-friends/${userId}`) ).data
    }
    
}