import React, { useRef} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import FlyImg from './components/hooks/FlyImg';

const Layout = ({ cartRef }) => {
  const cart = useRef();
  // const flyimg = FlyImg(cart);

  return (
    <section className='text-white'>
    <Header cartRef={cartRef} />
    <Outlet />
    </section >
  )
}

export default Layout