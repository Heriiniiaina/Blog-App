import {jwtDecode} from "jwt-decode"
import { User } from "../Constants/UserInterface";
import {useSelector} from "react-redux"
import { RootState } from "../store/store";
export const getUser = ():User=>{
    const token = useSelector((store:RootState)=>store.auth.token) || ""
    const user = jwtDecode(token) as User
    return user
}