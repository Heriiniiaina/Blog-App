import axios from "axios";

axios.defaults.withCredentials = true
const BASE_URL = "http://localhost:8000/blog/profile"



export class UserApi {
    static async getUser(userId:string){
        return ( await axios.get(`${BASE_URL}/get-user/${userId}`) ).data
    }
   
    
}