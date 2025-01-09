import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface User{
    userId:string,
    nom:string,
    prenom:string,
    email:string,
    verified:boolean
}

interface AuthState {
    user:User | null,
    token:string | null
    isAuthenticiate:boolean
}

const token = sessionStorage.getItem("user-token")
const initialState:AuthState={
    user:null,
    token:token || null,
    isAuthenticiate:!!sessionStorage.getItem("user-token")
}

const authSlice = createSlice({
    name:"auth-slice",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<{user:User,token:string}>)=>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticiate = true
        },
        logout:(state)=>{
            state.isAuthenticiate = false
            state.token = null
            state.user = null
        }
    }
}) 

export const {login,logout} = authSlice.actions
export default authSlice.reducer
