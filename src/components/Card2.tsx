import React from 'react'
import pad from '../../public/images/pad.jpg'
import headphone2 from '../../public/images/headphone2.jpg'
import Image from 'next/image'

function Card2() {
    return (
        <div className='flex gap-5 mx-20'>
            <div className='relative'>
                <Image alt='c' src={pad} />
                <div className='absolute right-3 top-10'>
                    <p className='font-mono bg-gray-100 p-3 w-1/2 text-sm italic mb-2'>Best Offer</p>
                    <p className='w-3/4 my-3 text-md'>UP TO 30% OFF ON HEADPHONE</p>
                    <p className='mt-5'>Shop Now</p>
                </div>
            </div>
            <div className='relative'>
                <Image alt='h' src={headphone2} />
                <div className='absolute right-3 top-10'>
                    <p className='font-mono bg-gray-100 p-3 w-1/2 text-sm italic mb-2'>Best Offer</p>
                    <p className='w-3/4 my-3 text-md'>UP TO 30% OFF ON HEADPHONE</p>
                    <p className='mt-5'>Shop Now</p>
                </div>
            </div>



        </div>
    )
}

export default Card2