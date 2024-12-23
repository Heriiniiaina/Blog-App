
import { jwtDecode } from "jwt-decode"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { User } from "../../Constants/UserInterface"

const Profile = () => {
    const token = useSelector((store:RootState)=>store.auth.token)  || ""
    const user:User = jwtDecode(token)
    console.log(user)
    
    return (
    <div>
        <h1>{user?.nom} {user.prenom} </h1>
    </div>
  )
}

export default Profile