import { POST } from './../../Constants/PostInterface';
import {createSlice,PayloadAction} from "@reduxjs/toolkit"


interface PostState{
    posts:POST[]
}

const initialState:PostState={
    posts:[]
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