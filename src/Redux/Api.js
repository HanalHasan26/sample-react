import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios"

export const getProducts = createAsyncThunk(
    "products",
    async (name, thunkAPI) =>{

        try {
            
            const datas = await axios.get('https://dummyjson.com/products')
            return datas.data.products;

        } catch (error) {
            return thunkAPI.rejectWithValue("error")
        }

    }
)

const  INITIAL_STATE =  {
    products:[]
}

const apiSlice = createSlice({
    name:"api",
    initialState:INITIAL_STATE,
    extraReducers:{
        [getProducts.pending]:(state) => {
            //////////---//////////////
        },
        [getProducts.fulfilled]:(state, action) =>{
            state.products = action.payload
        },
        [getProducts.rejected]:(state,action) =>{
            console.log(action);
        }
    }
})


export default apiSlice.reducer