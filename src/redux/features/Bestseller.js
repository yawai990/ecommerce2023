import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import * as api from '../../service';

export const getBestSeller = createAsyncThunk('bestsellerdata', (arg) =>{
  try {
  const data =  api.bestSellers()
    .then(resp =>{
      const { status, bestseller } = resp.data;
      if(status){
        return bestseller
      }
    })
    .catch(err => err)

    return data;
  } catch (error) {
      console.log(error)
  }
})

const initialState = {
  data: [],
  loading : true,
  isSuccess : false,
}

export const BestSeller = createSlice({
  name: 'bestseller',
  initialState,
  extraReducers:{
    [getBestSeller.pending]:(state,{payload}) => {
      state.loading = true
    },
    [getBestSeller.fulfilled]:(state,{payload})=>{
      state.loading = false,
      state.data = payload,
      state.isSuccess = true
    },
    [getBestSeller.rejected]:(state,{payload})=>{
      state.loading = false,
      state.data = payload;
      state.isSuccess = false
    },
  }
})


export default BestSeller.reducer;