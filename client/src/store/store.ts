import {configureStore} from "@reduxjs/toolkit"

import authReducer from "./slices/auth.slice"
import postReducer from "./slices/post.slice"
import loadingReducer from "./slices/loading.slice"
export const store = configureStore({
    reducer:{
     auth: authReducer,
     posts: postReducer,
     loading: loadingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>