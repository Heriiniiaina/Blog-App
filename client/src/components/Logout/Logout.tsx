import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { logout } from "../../store/slices/auth.slice"


const Logout = () => {
    const dispatch = useDispatch()
    dispatch(logout())
    sessionStorage.removeItem("user-token")
    sessionStorage.removeItem("post-token")
    return (
        <Navigate to={"/"} />
  )
}

export default Logout