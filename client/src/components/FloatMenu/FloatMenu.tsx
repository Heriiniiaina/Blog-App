import { BiLogOut } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { User } from "../../Constants/UserInterface"

interface FLOATMENU{
  user?:User
}

const FloatMenu = ({user}:FLOATMENU) => {
  console.log(user)
  return (
    <div className="flex flex-col gap-2 bg-white p-3">
        <div className="text-xl">
            <Link to={`/profile/${user?.userId}`}  className="flex items-center gap-1"><FaUser/> <p>Profile</p></Link>
        </div>
        <div className="text-xl">
            <Link to={"/logout"} className="flex items-center gap-1"><BiLogOut/> <p>Se déconnecter</p></Link>
        </div>
        
        
    </div>
  )
}

export default FloatMenu