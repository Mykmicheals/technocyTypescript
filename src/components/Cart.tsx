import { each } from 'immer/dist/internal';
import Image from 'next/image'
import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Speaker from '../../public/images/speaker1.jpg'
import { cartActions } from '../store/index';
import { serverHost } from './Card4';


function Cart() {

    let circleRed: HTMLDivElement | null = null
    const dispatch =useDispatch()



    const cart = useSelector((state) => state.cart)
    // console.log(cart.cartItems)
    return (
        <Fragment>
            {cart.showCart && <div>
                <div onClick={() => dispatch(cartActions.hideCart())} className='c-ov w-3/4 divide-y divide-slate-200  backdrop-brightness-50 h-screen fixed top-0 left-0 z-50'></div>

                <div className='fixed z-10 top-0 right-0 bg-white  h-3/4 w-1/4 p-10 border-b overflow-x-auto'>

                    {  cart.cartItems.map((item) => {
                            return (
                                <div key={item.id} className='c-ov flex gap-5 border-t p-4'>
                                    <p onClick={() => dispatch(cartActions.removeFromCart(item.id))} className='text-gray-700 absolute right-1 text-red-600 cursor-pointer'>X</p>
                                    <div className='w-1/3'>
                                        <Image width='100' height='100' src={`${serverHost}${item.image}`} alt={item.name.slice(0, 10)} />
                                    </div>
                                    <div className='w-2/3'>
                                        <h4 className='mb-3'>{item.name.slice(0, 30)}</h4>
                                        <p className=''>{item.qty} X <span>$ {item.price}</span> </p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className='c-ov fixed bg-white z-10 bottom-0 right-0 w-1/4 h-1/4 mt-4'>
                    <div className='flex mx-5 gap-24'>
                        <p className='uppercase  text-2xl'>Subtotal</p>
                        <p className='text-2xl text-red-500 '>$ {cart.totalAmount}</p>
                    </div>
                    <div className=''>
                        <p className='flex justify-center items-center mt-5 px-4 py-3 rounded font-bold text-sm bg-gray-100 w-4/5 mx-10 cursor-pointer hover:bg-gray-200'>VIEW CART</p>
                        <p className='flex justify-center items-center mt-2 px-4 py-3 rounded text-white font-bold text-sm bg-red-400 w-4/5 mx-10 hover:bg-red-500'>CHECKOUT</p>
                    </div>


                </div>
            </div>}

        </Fragment>

    )
}

export default Cart