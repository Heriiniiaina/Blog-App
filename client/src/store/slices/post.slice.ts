import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { POST } from "../../Constants/PostInterface"

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
        }
    }
})


export const {setPost} = postSlice.actions
export default postSlice.reducer