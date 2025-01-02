import React, { useState } from "react"

import AuthForm from "../components/AuthForm/Fo"
import { AuthApi } from "../api/auth.api"
import { useDispatch } from "react-redux"
import { login } from "../store/slices/auth.slice"

import {jwtDecode} from "jwt-decode"
import { setLoading } from "../store/slices/loading.slice"

interface User{
    userId:string,
    nom:string,
    prenom:string,
    email:string,
    verified:boolean

}

const Login = () => {
    const dispatch = useDispatch()
    const [loginForm,setLoginForm] = useState({
    email:"",
    password:""
})
    

const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    dispatch(setLoading(true))
    try {
        const res = await AuthApi.login(loginForm)
        const userData:User = jwtDecode(res.token)
        dispatch(login({user:userData,token:res.token}))
        sessionStorage.setItem("user-token",res.token)
        console.log(res)
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(setLoading(false))
    }
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