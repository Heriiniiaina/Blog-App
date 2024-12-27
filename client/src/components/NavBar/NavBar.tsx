import { useSelector } from "react-redux"
import InputCustom from "../InputCutom/InputCustom"
import Logo from "../Logo/Logo"

import { User } from "../../Constants/UserInterface"
import { jwtDecode } from "jwt-decode"
import { RootState } from "../../store/store"
import { FaBell, FaEnvelope, FaHome, FaSearch, FaSpellCheck, FaUserFriends } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"





const NavBar = () => {
    const token = useSelector((store:RootState)=>store.auth.token)  || ""
    const user:User = jwtDecode(token)
  return (
    <div className="bg-[#fff] p-3 flex items-center justify-between">
        <div>
            <Logo/>
        </div>
        <div className="relative">
            <InputCustom name="search" placeHolder="search" className="p-3 md:w-[400px] rounded-md"  type="text" style={{backgroundColor:"rgba(80,181,255,.2)"}}/>
            <FaSearch className="text-xl absolute top-1/4 right-2 text-slate-700"/>
        </div>
        <div className="flex items-center gap-4">
            <FaHouse  className="text-xl"/>
            <FaUserFriends className="text-xl"/>
            <FaBell className="text-xl"/>
            <FaEnvelope className="text-xl"/>
            <div className="flex items-center gap-2">
                <img src={user.image} alt="" className="rounded-full w-[50px] h-[50px]"/>
                <h1>{user.nom} {user.prenom}</h1>
            </div>
            
        </div>
    </div>
  )
}
export default NavBar