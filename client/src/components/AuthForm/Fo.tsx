import React from "react"
import InputCustom from "../InputCutom/InputCustom"
import ButtonCustom from "../ButonCustom/ButtonCustom"
import bg from "../../assets/Login-BG.png"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Loading from "../Loading/Loading"
import { Link } from "react-router-dom"

interface AUTHFORM {
    type:"Login" | "Register"
    handleSubmit?:React.FormEventHandler<HTMLFormElement> 
    handleChange:React.ChangeEventHandler<HTMLInputElement>
}

const AuthForm = ({type,handleSubmit,handleChange}:AUTHFORM) => {
  
    const loading = useSelector((store:RootState)=>store.loading.loading)
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
            {type == 'Login' && <Link className="text-xs" to={"/forgot-pqssword"}>Mot de passe oublié ?</Link>}
            <ButtonCustom className="bg-blue-500  p-3 rounded text-cyan-50 self-stretch" type="submit">{loading ? <Loading size="small"/> : type=="Login" ? "Se connecter" : "S'inscrire"}   </ButtonCustom>
            {type == "Login" ? <p>Vous n' avez pas encore de compte ? <Link to={"/signup"}>Cliquer ici</Link></p>: <p>Vous avez déja encore de compte ? <Link to={"/"}>Cliquer ici</Link></p>}
        </form>
        </div>
        
    </div>
  )
}

export default AuthForm