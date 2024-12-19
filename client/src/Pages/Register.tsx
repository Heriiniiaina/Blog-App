import React, { useState } from "react"

import AuthForm from "../components/AuthForm/Fo"




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