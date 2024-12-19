import React, { useState } from "react"
import InputCustom from "../components/InputCutom/InputCustom"
import ButtonCustom from "../components/ButonCustom/ButtonCustom"
import AuthForm from "../components/AuthForm/Fo"




const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        console.log(email+"  " + password)
    }
    return (
        <AuthForm type="Register"/>
        
  )
}

export default Register