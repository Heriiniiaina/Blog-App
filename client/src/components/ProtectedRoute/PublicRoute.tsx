
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Navigate, Outlet } from 'react-router-dom'



const PublicRoute = () => {
  const isAuthenticiate = useSelector((store:RootState)=>store.auth.isAuthenticiate)
    return isAuthenticiate ? <Navigate to={"/home"} replace/> : <Outlet/>
}

export default PublicRoute