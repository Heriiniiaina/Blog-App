
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Register from "./Pages/Register"
import Home from "./Pages/Home"
import "./style.css"
import Login from "./Pages/Login"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Register />} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App