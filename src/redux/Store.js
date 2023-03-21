import { configureStore } from '@reduxjs/toolkit'
import BestSeller from './features/Bestseller';
import Product from './features/Product';
import CartItems from './features/CartItems';

export const store = configureStore({
  reducer: {
    bestseller: BestSeller,
    products : Product,
    cartItems :CartItems
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})