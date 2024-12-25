import axios from "axios";

axios.defaults.withCredentials = true
const BASE_URL = "http://localhost:8000/blog/user"

interface User{
    nom:string,
    prenom:string,
    email:string,
    image:string
}

export class UserApi {
    static async getUser(){
        return (await axios.get(`${BASE_URL}/get-user`)).data
    }
   
    
}