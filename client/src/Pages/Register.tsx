import React, { useState } from "react"

import AuthForm from "../components/AuthForm/Fo"
import { AuthApi } from "../api/auth.api"




const Register = () => {
  const [loginForm,setLoginForm] = useState({
    email:"",
    password:"",
    nom:"",
    prenom:"",
    addresse:""
})
const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    try {
        const res = await AuthApi.register(loginForm)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name
    const value = e.target.value
    setLoginForm((prev)=>({...prev,[name]:value}))
    console.log(loginForm)
}
    return (
        <AuthForm type="Register" handleSubmit={handleSubmit} handleChange={handleChange}/>
        
  )
}

export default Register