
import { jwtDecode } from "jwt-decode"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { User } from "../../Constants/UserInterface"
import { FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { GoLocation } from "react-icons/go"

const Profile = () => {
    const token = useSelector((store:RootState)=>store.auth.token)  || ""
    const user:User = jwtDecode(token)
    console.log(user)
    
    return (
    <div className="flex flex-col items-center bg-slate-100 h-[100%] p-3 m-5">
        <div>
          <img src={user.image} alt="" className="rounded-full w-[100px] h-[100px]" />

        </div>
        <div className="leading-7">
        <h1 className="flex items-center text-xl"><FaUser/> {user?.nom} {user.prenom} </h1>
        <h2 className="flex items-center text-xl"><MdEmail/> {user.email}</h2>
        <h3 className="flex items-center text-xl"><GoLocation/> {user.city}</h3>
        <h4 className="flex items-center text-xl">{user.birth}</h4>
        </div>
       
    </div>
  )
}

export default Profile
//https://res.cloudinary.com/dho6csxnj/image/upload/v1734419707/blog_image/umtqjnkfghpoxbxubzzl.png