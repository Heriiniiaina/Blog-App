import {configureStore} from "@reduxjs/toolkit"

import authReducer from "./slices/auth.slice"
import postReducer from "./slices/post.slice"
export const store = configureStore({
    reducer:{
     auth: authReducer,
     posts: postReducer
    }
})

export type RootState = ReturnType<typeof store.getState>