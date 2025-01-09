import { useSelector } from "react-redux"
import DisplayUserInfo from "../components/DisplayUserInfo/DisplayUserInfo"
import NavBar from "../components/NavBar/NavBar"
import { RootState } from "../store/store"
import { getUser } from "../services/user.service"
import { User } from "../Constants/UserInterface"


const Profile = () => {
 const user = getUser() as User
 console.log(user)
  return (
    <div className="bg-[#f8f9fa] w-full">

      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div>
         <div>
            <DisplayUserInfo user={user}/>
         </div>
         <div>

         </div>
      </div>
    
    </div>
  )
}

export default Profile