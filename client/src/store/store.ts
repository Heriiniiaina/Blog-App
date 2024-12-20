import {configureStore} from "@reduxjs/toolkit"

import authReducer from "./slices/auth.slice"

export const store = configureStore({
    reducer:authReducer
})

export type RootState = ReturnType<typeof store.getState>