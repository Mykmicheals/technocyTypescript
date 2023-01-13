import React, { useState } from 'react'
import Image from 'next/image'
import speaker1 from '../../public/images/speaker1.jpg'
import speaker2 from '../../public/images/speaker2.jpg'
import { cartActions } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export var serverHost = 'http://127.0.0.1:8000/'

function Card4({ img, category, name, price, id, description, star }) {
    const dispatch = useDispatch()
    const [showCartBtn, setShowCartBtn] = useState<boolean>(false)

    function loopIt(times) {
        return (
            <div>

            </div>
        )
    }



    // const cart = useSelector((state) => state.cart.cartItems)

    const addToCart = (cartItem: {}) => {
        return (event: React.MouseEvent) => {
            dispatch(cartActions.addToCart(cartItem))
            dispatch(cartActions.showCartFunc())
        }
    }

    return (
        <div onMouseEnter={() => setShowCartBtn(true)} onMouseLeave={() => setShowCartBtn(false)} className={`z-10 bg-white px-10 py-16 transform ${showCartBtn ? 'transform hover:scale-y-110  z-10' : ''} origin-top cursor-pointer  md:w-1/5 w-2/5 rounded-md`}>
            <Link
                key={id} href={{
                    pathname: `/detail`,
                    query: {
                        image: img,
                        description: description,
                        name: name,
                        id: id,
                        price: price
                    },
                }}>
                <div className='h-1/2'>
                    <Image width={200} height={200} className='w-56 rounded-sm py-10 px-5' src={`${serverHost}${img}`} alt={name} />
                </div>
                <p className='text-sm mt-8'>{category}</p>
                <p className=' my-4 text-sm'>{name.slice(0, 35)}</p>
                <p className='font-mono text-gray-500 font-bold  bottom-16 mt-8'>₦ {price}</p>
            </Link>

            {showCartBtn ? <button onClick={addToCart({ name: name, price: price, image: img, id: id, qty: 1 })} className=' bg-red-600 px-5 py-2 text-white my-2 rounded text-sm font-serif absolute bottom-1'>Add to cart</button> : null}

        </div >

    )
}

export default Card4