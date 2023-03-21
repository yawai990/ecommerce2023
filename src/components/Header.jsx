import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='bg-primary drop-shadow w-full min-h-[60px] flex justify-between items-center px-10'>
        <h4>Logo</h4>

        <div className="flex items-center gap-4">
          <Link to={'/cartitems'}>
            <button className='bg-white text-black drop-shadow p-2 rounded-full text-xl relative'>
               {/* <p className='absolute -top-2 right-0 rounded-full'>0</p> */}
                <BsCart4 />
            </button>
          </Link>
            <p>icon</p>
        </div>

    </div>
    </>
  )
}

export default Header