
import { jwtDecode } from "jwt-decode"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { User } from "../../Constants/UserInterface"

const Profile = () => {
    const token = useSelector((store:RootState)=>store.auth.token)  || ""
    const user:User = jwtDecode(token)
    console.log(user)
    
    return (
    <div className="flex flex-col items-center">
        <img src={user.image} alt="" className="rounded-full w-[100px] h-[100px]" />
        <h1>{user?.nom} {user.prenom} </h1>
        <h2>{user.email}</h2>
    </div>
  )
}

export default Profile
//https://res.cloudinary.com/dho6csxnj/image/upload/v1734419707/blog_image/umtqjnkfghpoxbxubzzl.png