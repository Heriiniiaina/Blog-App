import { useEffect, useState } from "react"
import { POST } from "../../Constants/PostInterface"
import { User } from "../../Constants/UserInterface"
import { UserApi } from "../../api/user.api"

interface DisplayPostProps {
    posts: POST
}

const DisplayPost = ({posts}:DisplayPostProps) => {
  const [user,setUser] = useState<User>()
  useEffect(()=>{
    const getUser = async()=>{
      try {
        const res = await UserApi.getUser(posts.user)
        setUser(res.user)
      } catch (error) {
        console.log(error)
      }
      
      
    }
    getUser()
  },[])
  console.log(user)
  return (
    <div>
        <h3>{user?.nom} {user?.prenom}</h3>
        <h1>{posts.content}</h1>
        <p>{posts.createAt}</p>
    </div>
  )
}

export default DisplayPost