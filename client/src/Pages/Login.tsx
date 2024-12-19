import React, { useState } from "react"
import InputCustom from "../components/InputCutom/InputCustom"
import ButtonCustom from "../components/ButonCustom/ButtonCustom"
import AuthForm from "../components/AuthForm/Fo"




const Login = () => {
  const [loginForm,setLoginForm] = useState({
    email:"",
    password:""
})
const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
   
}
const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name
    const value = e.target.value
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    console.log(loginForm)
}
    return (
        <AuthForm type="Login" handleSubmit={handleSubmit} handleChange={handleChange}/>
        
  )
}

export default Login