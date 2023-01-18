import { each } from 'immer/dist/internal';
import Image from 'next/image'
import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Speaker from '../../public/images/speaker1.jpg'
import { cartActions, cartStore } from '../store/index';
import { serverHost } from './Card4';
import { PaystackButton } from 'react-paystack'
import Link from 'next/link';


function Cart() {

    let circleRed: HTMLDivElement | null = null
    const dispatch = useDispatch()
    const cart = useSelector(cartStore)

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    }

    const componentProps = {

        ...config,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Are you sure you want to go back"),
    }

    return (
        <Fragment>
            {cart.showCart && <div>

                <div onClick={() => dispatch(cartActions.hideCart())} className='c-ov w-3/4 divide-y divide-slate-200  backdrop-brightness-50 h-screen fixed top-0 left-0 z-50'></div>

                <div className='c-ov fixed z-10 top-0 right-0 bg-white  h-3/4 w-1/4 p-10 border-b overflow-x-auto'>
                    <p className='text-2xl delay-100 font-bold text-red-500 absolute left-4 cursor-pointer' onClick={() => dispatch(cartActions.hideCart())}>X</p>
                    {cart.cartItems.map((item) => {
                        return (
                            <div key={item.id} className=' flex gap-5 border-t p-4'>
                                <p onClick={() => dispatch(cartActions.removeFromCart(item.id))} className='text-gray-700 absolute right-8 text-red-600 cursor-pointer'>X</p>
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
                        <Link href='/payment'>
                            <p className='flex justify-center items-center mt-2 px-4 py-3 rounded text-white font-bold text-sm bg-red-400 w-4/5 mx-10 hover:bg-red-500'>
                                Checkout
                            </p>
                        </Link>


                        <PaystackButton className="btn" {...componentProps} />

                    </div>


                </div>
            </div>}

        </Fragment>

    )
}

export default Cart