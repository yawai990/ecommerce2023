import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout = () => {
  return (
    <section className='text-white'>
    <Header />
    <Outlet />
    </section >
  )
}

export default Layout