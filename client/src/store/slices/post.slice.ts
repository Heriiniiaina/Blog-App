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

    }
})

export default postSlice.reducer