
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Navigate, Outlet } from 'react-router-dom'



const PrivateRoute = () => {
  const isAuthenticiate = useSelector((store:RootState)=>store.auth.isAuthenticiate)
    return isAuthenticiate ? <Outlet/> : <Navigate to={"/"} replace/> 
}

export default PrivateRoute