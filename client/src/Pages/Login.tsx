import React, { useState } from "react"
import InputCustom from "../components/InputCutom/InputCustom"
import ButtonCustom from "../components/ButonCustom/ButtonCustom"




const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        console.log(email+"  " + password)
    }
    return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <h1>Bon retour</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
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

export default Login