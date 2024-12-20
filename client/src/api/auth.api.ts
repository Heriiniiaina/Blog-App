import axios from "axios";

interface AUTH{
    email:string,
    password:string,
    nom?:string,
    prenom?:string,
    addresse?:string
}
axios.defaults.withCredentials = true
const BASE_URL = "http://localhost:8000/blog/auth"
export class AuthApi{
    static async login(Formdata:AUTH){
        return (await axios.post(`${BASE_URL}/sign`,{email:Formdata.email,password:Formdata.password})).data
    }
    static async register(Formdata:AUTH){
        return (await axios.post(`${BASE_URL}/signup`,{nom:Formdata.nom,prenom:Formdata.prenom,addresse:Formdata.addresse,email:Formdata.email,password:Formdata.password})).data
    }
}