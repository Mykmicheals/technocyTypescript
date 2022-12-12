import Image from 'next/image'
import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Speaker from '../../public/images/speaker1.jpg'
import { cartActions } from '../store/index';


function Cart() {

    const dispatch = useDispatch()



    const cartState = useSelector((state) => state.cart.showCart)
    return (
        <Fragment>
            {cartState && <div>
                <div onClick={() => dispatch(cartActions.hideCart())} className='w-3/4 divide-y divide-slate-200  backdrop-brightness-50 h-screen fixed top-0 left-0 z-50'></div>

                <div className='fixed z-10 top-0 right-0 bg-white  h-3/4 w-1/4 p-10 border-b overflow-x-auto'>
                    <div className='flex gap-5'>
                        <div className='w-1/3'>
                            <Image alt='cart-img-1' src={Speaker} />
                        </div>
                        <div className='w-2/3'>
                            <h4>The best speaker in the world right now</h4>
                            <p>1 X <span>$700</span> </p>
                        </div>

                    </div>

                    <div className='flex gap-5 mt-5'>
                        <div className='w-1/3'>
                            <Image alt='cart-img-1' src={Speaker} />
                        </div>
                        <div className='w-2/3'>
                            <h4 className='text mb-2 capitalize font-serif font-bold'>The best speaker in the world right now</h4>
                            <p>1 X <span className='text-red-600'>$700</span> </p>
                        </div>

                    </div>

                    <div className='flex gap-5 mt-5'>
                        <div className='w-1/3'>
                            <Image alt='cart-img-1' src={Speaker} />
                        </div>
                        <div className='w-2/3'>
                            <h4 className='text mb-2 capitalize font-serif font-bold'>The best speaker in the world right now</h4>
                            <p>1 X <span className='text-red-600'>$700</span> </p>
                        </div>

                    </div>

                    <div className='flex gap-5 mt-5'>
                        <div className='w-1/3'>
                            <Image alt='cart-img-1' src={Speaker} />
                        </div>
                        <div className='w-2/3'>
                            <h4 className='text mb-2 capitalize font-serif font-bold'>The best speaker in the world right now</h4>
                            <p>1 X <span className='text-red-600'>$700</span> </p>
                        </div>

                    </div>

                    <div className='flex gap-5 mt-5'>
                        <div className='w-1/3'>
                            <Image alt='cart-img-1' src={Speaker} />
                        </div>
                        <div className='w-2/3'>
                            <h4 className='text mb-2 capitalize font-serif font-bold'>The best speaker in the world right now</h4>
                            <p>1 X <span className='text-red-600'>$700</span> </p>
                        </div>

                    </div>

                    
                </div>
                <div className='fixed bg-white z-10 bottom-0 right-0 w-1/4 h-1/4 mt-4'>
                    <div className='flex mx-5 gap-24'>
                        <p className='uppercase  text-2xl'>Subtotal</p>
                        <p className='text-2xl text-red-500 '>$2,500</p>
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