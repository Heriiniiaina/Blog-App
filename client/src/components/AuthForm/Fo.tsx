import React, { useState } from "react"
import InputCustom from "../InputCutom/InputCustom"
import ButtonCustom from "../ButonCustom/ButtonCustom"
import bg from "../../assets/Login-BG.png"

interface AUTHFORM {
    type:"Login" | "Register"
    handleSubmit?:React.FormEventHandler<HTMLFormElement> | undefined
}

const AuthForm = ({type,handleSubmit}:AUTHFORM) => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
    return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen" style={{background:`url(${bg})`, backgroundSize:"cover"}}>
        <h1>{type === "Login" ? "Bon retour" : "Bienvenue"}</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
            {
                type ==  "Register" && ( <InputCustom type="text" placeHolder="Votre Nom" className="border border-black pl-2 p-1 rounded-xl outline-none"/> )
               
            }
            <InputCustom type="text" placeHolder="Votre email" onChange={(e)=> setEmail(e.target.value)} 
                className="border border-black pl-2 p-1 rounded-xl outline-none"
            />
            <InputCustom type="password"  placeHolder="Votre mot de passe" onChange={(e)=>setPassword(e.target.value)}
                className="border border-black pl-2 p-1 rounded-xl outline-none"
            />
          
            <ButtonCustom className="bg-blue-500 w-[200px] p-3 rounded text-cyan-50" type="submit">Se Connecter</ButtonCustom>
        </form>
    </div>
  )
}

export default AuthForm