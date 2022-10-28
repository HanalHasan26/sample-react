//1. Provider
//2. Store 
//3. Reducer
//4. Action

import {createSlice} from '@reduxjs/toolkit'

const  INITIAL_STATE =  {
    StateCount:0,
}

const countSlice = createSlice({
    name:"count",
    initialState:INITIAL_STATE,
    reducers : {
        increment:(value)=>{
            value.StateCount +=1
        },
        decrement:(value)=>{
            value.StateCount -=1
        },
    }
})


export const {increment, decrement} = countSlice.actions

export default countSlice.reducer

