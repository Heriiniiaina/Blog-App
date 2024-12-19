import React from "react"
import InputCustom from "../InputCutom/InputCustom"
import ButtonCustom from "../ButonCustom/ButtonCustom"
import bg from "../../assets/Login-BG.png"

interface AUTHFORM {
    type:"Login" | "Register"
    handleSubmit?:React.FormEventHandler<HTMLFormElement> 
    handleChange:React.ChangeEventHandler<HTMLInputElement>
}

const AuthForm = ({type,handleSubmit,handleChange}:AUTHFORM) => {
  
   
    return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen  " style={{background:`url(${bg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className="bg-[#e9effade] p-5 px-9 rounded flex flex-col gap-3">
        <h1 className="text-xl">{type === "Login" ? "Bon retour" : "Bienvenue"}</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
            {
                type ==  "Register" && 
                ( 
                <>
                    <InputCustom name="nom" type="text" placeHolder="Votre Nom" className="border border-black pl-2 p-1 rounded outline-none" onChange ={handleChange}/> 
                    <InputCustom name="prenom" type="text" placeHolder="Votre Prenom" className="border border-black pl-2 p-1 rounded outline-none" onChange={handleChange}/> 
                    <InputCustom name="addresse" type="text" placeHolder="Votre addresse" className="border border-black pl-2 p-1 rounded outline-none" onChange={handleChange}/> 
                </>
                )
            }
            <InputCustom name="email" type="text" placeHolder="Votre email" 
                className="border border-black pl-2 p-1 rounded outline-none"
                onChange={handleChange}
            />
            <InputCustom name="password" type="password"  placeHolder="Votre mot de passe" 
                className="border border-black pl-2 p-1 rounded outline-none"
                onChange={handleChange}
            />
          
            <ButtonCustom className="bg-blue-500  p-3 rounded text-cyan-50 self-stretch" type="submit">{type=="Login" ? "Se connecter" : "S'inscrire"}</ButtonCustom>
        </form>
        </div>
        
    </div>
  )
}

export default AuthForm