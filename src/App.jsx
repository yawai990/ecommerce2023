import React,{ useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import { Home, ProductDetails,Cart } from './pages';

function App() {
  const count = useSelector(state => state.counter);

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children :[
        { path : '/', element : <Home />},
        { path : '/productdetails', element : <ProductDetails />},
        { path : '/cartitems', element : <Cart />},
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
