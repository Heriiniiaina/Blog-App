
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Register from "./Pages/Register"
import Home from "./Pages/Home"
import "./style.css"
import Login from "./Pages/Login"
import PublicRoute from "./components/ProtectedRoute/PublicRoute"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import Post from "./Pages/Post/Post"
import Logout from "./components/Logout/Logout"
import Profile from "./Pages/Profile"

const App = () => {
  return (

    <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute/>}>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Register />} />
           
          </Route>
            <Route element={<PrivateRoute/>}>
              <Route path="/home" element={ <Home/>} />
              <Route path="/post/:id" element={<Post/>} />
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/profile/:id" element={<Profile/>}/>
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default App