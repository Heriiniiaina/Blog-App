import {configureStore,combineReducers} from "@reduxjs/toolkit"
import {persistReducer,persistStore} from "redux-persist"
import authReducer from "./slices/auth.slice"
import postReducer from "./slices/post.slice"
import loadingReducer from "./slices/loading.slice"
import storageSession from 'redux-persist/lib/storage/session'
const rootReducer = combineReducers({
    auth:authReducer,
    posts:postReducer,
    loading:loadingReducer
})
const persistConfig = {
    key:"root",
    storageSession
}
const persitedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    reducer:persitedReducer
})

export type RootState = ReturnType<typeof store.getState>