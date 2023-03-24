import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import Button from './Button';
import { AiOutlineHeart, AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import ReactStars from 'react-stars'

const Card = ({ ref, navigate, clickFun, addCart, addWishList, products }) => {
    const [ qty, setQty ] = useState(1);

    const minus = () => {
        if(qty >= 1 ){
            setQty(prev => prev - 1)
        }else{
            setQty(1)
        }
    };
    const plus = () => {
        if(qty === products.stock){
            setQty(products.stock)
        }else{
            setQty(prev => prev + 1)
        }
    };

    const GoDetail = (e) =>navigate(`/productdetails/${e}`);
  return (
    <div ref={ref} className='max-w-[240px] rounded-lg bg-white drop-shadow overflow-hidden relative'>

        <div className='w-[21%] h-[40px] bg-red-500 absolute flex justify-center items-center rounded-b-lg text-white'>
            35%
        </div>

        <div onClick={() =>GoDetail(products._id)}>
            <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1676337693/${products.image[0].path}`} alt="" className='w-full h-[180px] object-cover cursor-pointer' />
        </div>

        <div className='w-[90%] mx-auto'>

            <div className='flex justify-end my-1'>
            <ReactStars count={5} size={16} value={products.rating} edit={false} />
            </div>

            <section className='flex items-center justify-between'>
                <div>
            <p className='mb-2 font-semibold'>{products.productName}</p>

            <p className='mb-2'>US$ {Intl.NumberFormat('en-us').format(products.price)}</p>
            </div>

            <main className='py-0.5 items-center mb-2'>
                <div className='flex justify-center gap-3'>
                <button disabled={qty === 1 && true} onClick={minus} className={`flex justify-center items-center border p-1 text-lg ${qty === 1 ? 'cursor-not-allowed bg-gray-100':'cursor-pointer'}`}>
                    <AiOutlineMinus />
                </button>
                <p>{qty}</p>
                <button disabled={qty === products.stock && true} onClick={plus} className={`flex justify-center items-center border p-1 text-lg ${qty === products.stock ? 'cursor-not-allowed bg-gray-100':'cursor-pointer'}`}>
                    <AiOutlinePlus />
                </button>
                </div>
            </main>

            </section>

        </div>
   

    <div className='flex'>
        <Button text={'add to cart'} icon={<BsCart4 />} color='#379237' fun={() =>addCart({ products, qty : qty})} />
        <Button text={'wishlist'} icon={<AiOutlineHeart />} color={'#2F58CD'} fun={addWishList} />

    </div>
  

    </div>
  )
};

export default Card