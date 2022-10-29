//1. Provider
//2. Store 
//3. Reducer
//4. Action

import { createSlice} from '@reduxjs/toolkit'
import cars from "../api/cars.json"





const  INITIAL_STATE =  {
    StateCount:0,
    car : cars
}

const countSlice = createSlice({
    name:"count",
    initialState:INITIAL_STATE,
    reducers : {
        increment:(value, action)=>{
            value.StateCount +=1
            console.log(action.payload);
        },
        decrement:(value,action)=>{
            value.StateCount -=1
            console.log(action.payload);
        },
    },
})


export const {increment, decrement} = countSlice.actions

export default countSlice.reducer

