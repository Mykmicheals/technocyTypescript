import React from 'react'
import Image from 'next/image'
import speaker1 from '../../public/images/speaker1.jpg'
import speaker2 from '../../public/images/speaker2.jpg'
import { cartActions } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';

export var serverHost = 'http://127.0.0.1:8000/'

function Card4({ img, category, name, price, id }) {
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart.cartItems)

    const addToCart = (cartItem: {}) => {
        return (event: React.MouseEvent) => {
            dispatch(cartActions.addToCart(cartItem))
            dispatch(cartActions.showCartFunc())

        }

    }

    return (

        <div className='z-10 bg-white px-10 py-16 h-128 hover:h-140 transform origin-top cursor-pointer  w-72 hover:w-72 rounded-md'>
            <div className='h-1/2'>
                <Image width='200' height='200' className='w-56 rounded-sm py-10 px-5' src={`${serverHost}${img}`} alt={name} />
            </div>
            <p className='text-sm mt-16'>{category}</p>
            <p className=' my-4 text-sm'>{name}</p>
            <p className='font-mono text-gray-500 font-bold absolute bottom-16 mt-8'>₦ {price}</p>

            <button onClick={addToCart({ name: name, price: price, image: img, id: id, qty: 1 })} className='hover:ease-in duration-300 bg-red-600 px-5 py-2 text-white my-2 rounded text-sm font-serif absolute bottom-1'>Add to cart</button>
        </div>


    )
}

export default Card4