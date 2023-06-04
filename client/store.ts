import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import {TypedUseSelectorHook, useSelector} from 'react-redux'

export const store = configureStore({
    reducer: {
     auth:null
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
