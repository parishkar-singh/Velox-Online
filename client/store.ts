import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import authReducer from "@/redux/authSlice";
export const store = configureStore({
    reducer: {
     auth:authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
