import React,{ useRef, useEffect } from 'react';
import { getBestSeller } from './redux/features/Bestseller';
import { getAllProducts } from './redux/features/Product';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { Home, ProductDetails,Cart } from './pages';

function App() {
  const dispatch = useDispatch();
  const cart = useRef();

  useEffect(() =>{
    dispatch(getBestSeller())
    dispatch(getAllProducts())
  }, []);

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout cartRef={cart} />,
      children :[
        { path : '/', element : <Home cartRef={cart} />},
        { path : '/productdetails/:id', element : <ProductDetails />},
        { path : '/cartitems', element : <Cart />},
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
