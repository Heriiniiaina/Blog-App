import { useSelector } from "react-redux"
import DisplayUserInfo from "../components/DisplayUserInfo/DisplayUserInfo"
import NavBar from "../components/NavBar/NavBar"
import { RootState } from "../store/store"
import { getUser } from "../services/user.service"
import { User } from "../Constants/UserInterface"
import { UserApi } from "../api/user.api"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import DisplayPost from "../components/DisplayPost/DisplayPost"
import DisplayUserPost from "../components/DisplayUserPost/DisplayUserPost"


const Profile = () => {
  const {id} = useParams()
  const [user,setUser] = useState<User>()
  useEffect(()=>{
      const getUser = async()=>{
          if(!id)
            return null
          try {
            const res = await UserApi.getUser(id)
            setUser(res.user)
          } catch (error) {
            console.log(user)
          }
        
      }
      getUser()
  },[id])
 console.log(user)
  return (
    <div className="bg-[#f8f9fa] w-full">

      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div className="relative">
         <div className="absolute w-full z-0">
          { user &&  <DisplayUserInfo user={user}/> }
         </div>
        
         <div>
            <DisplayUserPost/>
         </div>
      </div>
    
    </div>
  )
}

export default Profile