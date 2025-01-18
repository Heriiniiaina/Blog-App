import React, { useState } from "react"

import AuthForm from "../components/AuthForm/Fo"
import { AuthApi } from "../api/auth.api"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setLoading } from "../store/slices/loading.slice"
import { useNavigate } from "react-router-dom"




const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginForm,setLoginForm] = useState({
    email:"",
    password:"",
    nom:"",
    prenom:"",
    addresse:""
})
const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    dispatch(setLoading(true))
    try {
        const res = await AuthApi.register(loginForm)
        navigate("/")
        toast.success(res.message)
    } catch (error :any) {
      
        toast.error(error.response.data.message)
    }
    finally{
        dispatch(setLoading(false))
        
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