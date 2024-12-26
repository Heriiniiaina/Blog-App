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
    <div className="flex flex-col bg-slate-200 w-[300px] p-5 m-5 rounded-md gap-3">
        <div className="user flex items-center gap-4" >
          <img src={user?.image} alt="user" className="w-[50px] h-[50px] rounded-full"/>
          <h3 className="text-xl font-bold">{user?.nom} {user?.prenom}</h3>
          <h5></h5>
        </div>
        <div className="post">
          <h1>{posts.content}</h1>
          <p>{posts.createAt}</p>
          {
            posts.image && <img src={posts.image} alt="post" className="w-[200px] h-[200px]"/>
          }
        </div>
        
    </div>
  )
}

export default DisplayPost