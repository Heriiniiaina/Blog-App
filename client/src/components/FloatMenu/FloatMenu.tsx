import { BiLogOut } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


const FloatMenu = () => {
  return (
    <div className="flex flex-col gap-2 bg-white p-3">
        <div className="text-xl">
            <Link to={"/profile"}  className="flex items-center gap-1"><FaUser/> <p>Profile</p></Link>
        </div>
        <div className="text-xl">
            <Link to={"/logout"} className="flex items-center gap-1"><BiLogOut/> <p>Se déconnecter</p></Link>
        </div>
        
        
    </div>
  )
}

export default FloatMenu