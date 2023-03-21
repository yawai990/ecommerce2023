import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../service';

export const getAllProducts = createAsyncThunk('products', (arg) =>{
    try {
       const data = api.getProducts()
        .then(resp => {
            const { products } = resp.data;
            return products;
        })
        .catch(err => err);

        return data;
    } catch (error) {
    console.log(error)
    }
 
});

const initialState ={
    products : [],
    isLoading : true,
    isSuccess : false,
    errmessage : '',
}
const Products = createSlice({
    name : 'products',
    initialState,
    extraReducers :{
        [getAllProducts.pending]:(state,{ payload }) =>{
            state.isLoading = true,
            state.isSuccess = false
        },
        [getAllProducts.fulfilled]:(state,{ payload }) =>{
            console.log()
            if(payload.message === 'Network Error'){
                                state.isLoading = false,
                                state.isSuccess = false,
                                state.errmessage = payload.message
            }else{
                state.isLoading = false,
                state.isSuccess = true,
                state.products = payload
            }
        },
        [getAllProducts.pending]:(state,{ payload }) =>{
            state.isLoading = true,
            state.isSuccess = false
        },
    }
});

export default Products.reducer;