import {configureStore} from '@reduxjs/toolkit'
import countReducer from './Count'
import apiReducer from './Api'

export const  store = configureStore({
    reducer:{
        count : countReducer,
        api :apiReducer
    }
})
