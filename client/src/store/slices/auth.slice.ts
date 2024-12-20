import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface User{
    id:string,
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

const initialState:AuthState={
    user:null,
    token:null,
    isAuthenticiate:false
}

const authSlice = createSlice({
    name:"auth-slice",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<{user:User,token:string}>)=>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticiate = true
        }
    }
}) 

export const {login} = authSlice.actions
export default authSlice.reducer
