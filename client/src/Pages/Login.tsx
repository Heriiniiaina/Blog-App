import React, { useState } from "react"
import InputCustom from "../components/InputCutom/InputCustom"




const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div>
        <h1>Bon retour</h1>
        <form action="">
            <InputCustom type="text" placeHolder="Votre email" onChange={(e)=> setEmail(e.target.value)} />
            <InputCustom type="password"  placeHolder="Votre mot de passe" onChange={(e)=>setPassword(e.target.value)}/>
        </form>
    </div>
  )
}

export default Login