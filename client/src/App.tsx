
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Register from "./Pages/Register"
import Home from "./Pages/Home"
import "./style.css"
import Login from "./Pages/Login"
import PublicRoute from "./components/ProtectedRoute/PublicRoute"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute/>}>
            <Route path="/" element={<Login/>} />

          </Route>
            <Route path="/signup" element={<Register />} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App