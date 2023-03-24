import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { add_product, remove_product } from '../redux/features/CartItems';

const Cart = () => {
  const { cartProducts } = useSelector(state => state.cartItems);
  const dispatch = useDispatch();
  const subTotal = cartProducts.reduce(((acc, curval) => {
    return acc + (curval.products.price * curval.qty)
  }), 0);

  const handleMinus = (id) =>{
     const addqty = cartProducts.filter(c => c.products._id === id);
     console.log([...cartProducts,{...addqty, qty : addqty[0].qty + 1}])
    //  dispatch()
  }

  return (
    <div className='text-black mt-10'>
      <h5 className='text-center mb-5 font-serif text-2xl'>Your Cart ({cartProducts.length} items)</h5>

      <div className="w-[70%] mx-auto border-y py-4 grid grid-cols-5 capitalize tracking-wide font-serif">
        <div className='col-span-2'>Items</div>
        {
          ['price', 'Quantity', 'total'].map((t, idx) => <div className='text-center' key={idx}>{t}</div>)
        }

      </div>

      <div>
        {
          cartProducts.length > 0 ?
            cartProducts?.map(pro => (
              <main key={pro.products._id} className="w-[70%] mx-auto border-y py-2 grid grid-cols-5 capitalize tracking-wide font-serif">
                <div className='col-span-2 flex gap-2'>
                  <div>
                    <img src={`https://res.cloudinary.com/dtcws1ecu/image/upload/v1676337693/${pro.products.image[0].path}`} alt="" className='w-[80px] border h-[60px] object-cover' />
                  </div>
                  <div>
                    <h3>{pro.products.productName}</h3>
                    <h6 className='text-sm'>{pro.products.brand}</h6>
                  </div>
                </div>
                <div className='flex items-center justify-center'>$ {pro.products.price}</div>
                <div className='flex items-center justify-center'>
                <button onClick={() =>handleMinus(pro.products._id)} className={`flex justify-center items-center border p-1 text-lg`}>
                    <AiOutlineMinus />
                </button>
                <p>{pro.qty}</p>
                <button className={`flex justify-center items-center border p-1 text-lg`}>
                    <AiOutlinePlus />
                </button>
                </div>
                <div className='flex items-center justify-center'>$ {Intl.NumberFormat('en-us').format(pro.products.price * pro.qty)}</div>
              </main>
            ))
            : <div className="w-[70%] mx-auto border-y py-2 capitalize tracking-wide font-serif">There is no product in your cart</div>
        }

        <section className="w-[70%] mx-auto py-2 grid grid-cols-5 capitalize tracking-wide font-serif">
          <div className='col-span-4 text-end mr-10'>SubTotal :</div>
          <div className='text-center'>$ {Intl.NumberFormat('en-us').format(subTotal)}</div>
        <button disabled={cartProducts.length > 0 ? false:true}
         className={`col-span-5 py-1 rounded hover:drop-shadow-lg mt-5 border ${cartProducts.length > 0 ? 'cursor-pointer bg-blue-500 text-white':'cursor-not-allowed text-stone-400'}`}
         >Place your order</button>
        </section>


        <div>

        </div>
      </div>
    </div>
  )
}

export default Cart