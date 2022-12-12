import React from 'react'
import Image from 'next/image'
import speaker1 from '../../public/images/speaker1.jpg'
import speaker2 from '../../public/images/speaker2.jpg'
import { cartActions } from '../store/index';
import { useDispatch } from 'react-redux';

function Card4() {

    const dispatch = useDispatch()

    return (
        <div className='z-10 bg-white p-10 h-120 hover:h-140 transform origin-top cursor-pointer  w-72 hover:w-72 rounded-md'>
            <Image className='w-56  rounded-sm py-10 px-5' src={speaker1} alt='speaker1' />
            <p className='text-sm'>Accessories</p>
            <p className='text-base my-4 italic'>Rustic Granite Gloves Robot Vacuum ZUSG4061 1600W</p>
            <p className='font-mono text-gray-500 font-bold my-5'>$700</p>

            <button onClick={() => dispatch(cartActions.showCartFunc())} className='bg-red-600 px-5 py-2 text-white my-2 rounded text-sm font-serif'>Add to cart</button>

        </div>

    )
}

export default Card4