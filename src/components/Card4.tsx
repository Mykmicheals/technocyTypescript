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


    const addToCart = (cartItem: {}) => {
        return (event: React.MouseEvent) => {
            dispatch(cartActions.addToCart(cartItem))
            dispatch(cartActions.showCartFunc())
        }
    }

    return (
        <div onMouseEnter={() => setShowCartBtn(true)} onMouseLeave={() => setShowCartBtn(false)} className={`col-span-1 z-10 bg-white px-10 py-20  ${showCartBtn ? 'transform hover:scale-y-110 hover:z-50  z-10' : ''} origin-top cursor-pointer hover:shadow-lg rounded-md transition duration-100`}>
            <Link
                key={id} href={{
                    pathname: `/detail`,
                    query: {
                        image: img,
                        description: description,
                        name: name,
                        id: id,
                        price: price,
                        category:category,
                    },
                }}>
                <div className='h-1/2'>

                    <Image width={200} height={200} className='w-56 rounded-sm py-4 px-5' src={`${serverHost}${img}`} alt={name} />
                </div>
                <p className='text-sm mt-8'>{category}</p>
                <p className=' my-4 text-sm'>{name.slice(0, 35)}</p>
                {Array.from({ length: star }, (_, i) => (
                    <span className='text-green-500' key={i}>★</span>
                ))}
                {Array.from({ length: 5 - star }, (_, i) => (
                    <span key={i}>☆</span>
                ))}
                <p className='font-mono text-gray-500 font-bold mt-4 bottom-12'>₦ {price}</p>
            </Link>

            {showCartBtn ? <button onClick={addToCart({ name: name, price: price, image: img, id: id, qty: 1 })} className=' bg-red-600 px-5 py-2 text-white my-2 rounded text-sm font-serif absolute bottom-1'>Add to cart</button> : null}

        </div >


    )
}

export default Card4