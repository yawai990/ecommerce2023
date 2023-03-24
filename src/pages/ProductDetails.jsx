import React,{ useState } from 'react';
import ReactStars from 'react-stars';
import { useLocation } from 'react-router-dom';
import { Button } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { add_product, remove_product } from '../redux/features/CartItems';

const ProductDetails = () => {
  const { products } = useSelector(state => state.products);
  const { pathname } = useLocation();
  const product = products.filter(p => p._id === pathname.split('/').slice(-1)[0])[0];
  const [ rating, setRating ] = useState(0);
  const [ qty, setQty ] = useState(1);
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(state => state.cartItems);

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

    const addHandler = (product) =>{
      const insideCart = cartProducts.filter(cp => cp.products._id === product._id);
  
      if(insideCart.length > 0 ){
        alert('product already in the cart')
      }else{
        dispatch(add_product({products : product,qty}))
      }
    };

  const starChangeHandler = (e) =>setRating(e);

  const handlerSubmit = e => {
    e.preventDefault();

    const elements = e.currentTarget.elements;
    const comment = elements.comment.value;
    if(!comment){
      return null;
    }else{
      console.log(rating,comment)
     elements.comment.value = '';
     setRating(0)
    }
  }

  return (
    <div className='w-[90%] flex min-h-[100vh] mx-auto p-4 bg-white rounded-lg overflow-hidden drop-shadow-2xl z-10 relative text-black'>

      <main className='w-[50%] px-3'>
        <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1676337693/${product.image[0].path}`}
        className='w-[70%] mx-auto md:w[80%] h-[400px] object-cover rounded'
         alt="" />
      </main>
      <div className='w-[50%]'>
        <Text title={product.productName} bold size={36} />
        <div className='flex gap-1'>
        <ReactStars count={1} size={16} color1={'#38E54D'} color2={'#38E54D'} edit={false} />
        <Text title={`${product.rating}`} size={16} color={'#38E54D'} />
        </div>
        <div className='flex gap-2 items-center'>
        <Text title={`$ ${product.price}`} size={30} line />
        <Text title={`$ ${product.price}`} size={32} />
        <div className='bg-red-500 text-white px-2 text-sm rounded-full'>
          35% OFF
        </div>
        </div>

                <div className='flex gap-3 my-4'>
                <button onClick={minus} className={`flex justify-center items-center border p-1 text-lg`}>
                    <AiOutlineMinus />
                </button>
                <p>{qty || 1}</p>
                <button onClick={plus} className={`flex justify-center items-center border p-1 text-lg`}>
                    <AiOutlinePlus />
                </button>
             </div>

        <div className='flex gap-2 items-center mt-2'>
        <Button fun={()=>addHandler(product)} text={'add to cart'} color={'#516BEB'} />
        <Button text={'add to wishlist'} color={'#555555'} />
        </div>

        <div className='mt-10'>
          <Text title={'Reviews'} bold size={30} />

          <div className='mt-4 border-b pb-3'>
            <section className='flex gap-2 items-center'>
              <div className='w-11 h-11 border-2 border-slate-400 rounded-full overflow-hidden'>
                <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1676337693/${product.image[0].path}`}
                className='w-full h-full object-cover' alt="" />
              </div>
              <div>
                <p className='text-black text-lg tracking-wide'>Jennifer</p>
              <ReactStars size={16} count={5} value={3} edit={false} />
              </div>
            </section>
            <div className='flex gap-2'>
              <div className='flex-1'>
              <p>I'm really recommended for this items to buy. It's really really nice and useful</p>
              </div>
              <p className='text-sm'>32 minutes ago</p>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <Text title={'Write Reviews'} bold size={30} />

          <form onSubmit={handlerSubmit}>
          <ReactStars count={5} size={20} onChange={starChangeHandler} value={rating} />
            <div className='my-2'>
            <label className='block mb-2 text-md font-semibold'>Comment : </label>
            <textarea name='comment' placeholder='Write your comment....' className='p-2 rounded w-[100%] border border-stone-300 outline-none'></textarea>
            </div>
            <Button fullwidth text={'Comment'} color={'#516BEB'} />
          </form>
          </div>

      </div>
    </div>
  )
};

const Text = ({ title, size, bold, color, line }) => <h6 
                            style={{
                              fontSize : size ? `${size}px`:'16px',
                              color : color ? color : '#3d3d3d',
                              textDecoration: line && 'line-through'
                            }}
                            className={`
                            ${bold && 'font-semibold'}
                            `}
                            >{title}</h6>

export default ProductDetails