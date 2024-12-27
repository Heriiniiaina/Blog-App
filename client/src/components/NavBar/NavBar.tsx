import { useSelector } from "react-redux"
import InputCustom from "../InputCutom/InputCustom"
import Logo from "../Logo/Logo"

import { User } from "../../Constants/UserInterface"
import { jwtDecode } from "jwt-decode"
import { RootState } from "../../store/store"




const NavBar = () => {
    const token = useSelector((store:RootState)=>store.auth.token)  || ""
    const user:User = jwtDecode(token)
  return (
    <div className="bg-blue-500 p-3 flex items-center justify-between">
        <div>
            <Logo/>
        </div>
        <div>
            <InputCustom name="search" placeHolder="search" type="text"/>
        </div>
        <div className="flex items-center gap-2">
            <img src={user.image} alt="" className="rounded-full w-[50px] h-[50px]"/>
            <h1>{user.nom} {user.prenom}</h1>
        </div>
    </div>
  )
}
export default NavBar