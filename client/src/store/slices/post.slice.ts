import { jwtDecode } from 'jwt-decode';
import { POST } from './../../Constants/PostInterface';
import {createSlice,PayloadAction} from "@reduxjs/toolkit"


interface PostState{
    posts:POST[]
}

const token = sessionStorage.getItem("post-token")
const decode =token ? jwtDecode(token) as { posts: POST[]; iat: number; exp: number } : null

const initialState:PostState={
    posts: decode ? decode.posts : [] 
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        setPost:(state,action:PayloadAction<{posts:POST[]}>)=>{
            state.posts = action.payload.posts
        },
        addPost:(state,action:PayloadAction<POST>)=>{
            state.posts.push(action.payload)
        }
    }
})


export const {setPost,addPost} = postSlice.actions
export default postSlice.reducer