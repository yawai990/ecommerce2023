import { createSlice } from "@reduxjs/toolkit";
import * as actionType from '../constants/actions';

const initialState = {
    cartProducts : [],
}
const CartItems = createSlice({
    name : 'cartitems',
    initialState,
    reducers : {
        add_product : (state, {payload}) => {
            //check items is already in the cart
            state.cartProducts.push(payload)
            state.errMessage = ''
        },
        remove_product : (state,{ payload }) =>{

       state.cartProducts.filter(p => p._id !== payload._id)
        }
    }
});

export const { add_product, remove_product  } = CartItems.actions;

export default CartItems.reducer;