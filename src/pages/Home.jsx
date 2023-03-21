import React, { useEffect } from 'react';
import { Carousel } from '../components';
import { TfiReload } from 'react-icons/tfi';
import { AiFillCaretDown } from 'react-icons/ai';
import { getBestSeller } from '../redux/features/Bestseller';
import { getAllProducts } from '../redux/features/Product';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Loading,ErrorMessage } from '../components';
import { add_product, remove_product } from '../redux/features/CartItems';

const FilterHeader = ({ title,icon, onFun}) =>{
  return <div className='flex items-center border border-collapse'>
            <h3 className='flex-1 capitalize font-semibold tracking-widest ml-5'>{title}</h3>
          <button 
          onClick={onFun}
          className='w-[50px] text-xl font-semibold h-[50px] flex justify-center items-center border-l'>{icon}</button>
          </div>
}

const Home = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(state => state.cartItems);
  const { isLoading, isSuccess, products, errmessage } = useSelector(state => state.products);

  const addHandler = (product) =>{
    const insideCart = cartProducts.filter(cp => cp.products._id === product.products._id);

    if(insideCart.length > 0 ){
      alert('product already in the cart')
    }else{
      dispatch(add_product(product))
    }
  };

console.log(cartProducts)
  useEffect(() =>{
    dispatch(getBestSeller())
    dispatch(getAllProducts())
  }, []);
  return (
    <>
          <div className='h-[18vh] bg-primary flex justify-center items-center'>
        <h5 className='uppercase font-semibold tracking-widest text-white text-lg text-center'>Men's lifestyle shoes</h5>
        </div>
    <main className='relative h-[90vh]'>
      <div className='bg-primary top-0 left-0 z-0 w-full h-[5vh] absolute' />
        
      <div className='w-[90%] min-h-[100vh] mx-auto p-4 bg-white rounded-lg overflow-hidden drop-shadow-2xl z-10 relative'>
{/*         
        <main className='grid grid-cols-3'>
        <div className='max-h-[360px] col-span-2 bg-blue-300 overflow-hidden'>
          <Carousel gradient />
        </div>
        <div className='max-h-[360px]'>
          <Carousel />
        </div>
        </main> */}
  
      {/* product part */}
      <section className='z-10'>
        <div className='grid grid-cols-3 text-slate-700 border-collapse'>
          <FilterHeader title={'filter'} icon={<TfiReload />} />
          <FilterHeader title={'sort by: Price(lowest-highest)'} icon={<AiFillCaretDown />} />
        </div>

        <main className='text-black flex gap-3'>
          <div className='w-[30%] border-r'>categordasy price brand</div>
          <div className='grid grid-cols-4 gap-2 w-full mt-4'>

            {
              isLoading ? <Loading />:
              !isSuccess && !isLoading ? <ErrorMessage message={errmessage} />:
              products.map(pro =><Card addCart={addHandler} key={pro._id} products={pro} />)
            }
          </div>
        </main>
      </section>
      </div>
    </main>
    </>
  )
};

export default Home