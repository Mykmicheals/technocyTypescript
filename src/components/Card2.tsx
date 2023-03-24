import React from 'react'
import pad from '../../public/images/pad.jpg'
import headphone2 from '../../public/images/headphone2.jpg'
import Image from 'next/image'

function Card2() {
    return (
        <div className='md:flex md:flex-wrap my-10 mx-4 md:mx-20'>
            <div className='relative mb-5'>
                <div className='w-full'>
                    <Image alt='c' className='w-full' src={pad} />
                </div>

                <div className='absolute right-3 top-10'>
                    <p className='font-mono bg-gray-100 p-3 w-1/2 text-sm italic mb-2'>Best Offer</p>
                    <p className='w-3/4 my-3 text-md'>UP TO 30% OFF ON HEADPHONE</p>
                    <p className='mt-5'>Shop Now</p>
                </div>
            </div>
            <div className='relative mb-5'>
                <div className='w-full'>
                    <Image alt='c' className='w-full' src={headphone2} />
                </div>
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