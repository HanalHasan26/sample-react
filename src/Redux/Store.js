import {configureStore} from '@reduxjs/toolkit'
import countReducer from './Count'

export const  store = configureStore({
    reducer:{
        count : countReducer
    }
})
