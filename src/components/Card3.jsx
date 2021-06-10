import React from 'react'
import bus from '../../public/images/bus.jpg'
import Image from 'next/image'

function Card3() {
    return (
        <div className='bg'>
            <div className='bg-white flex gap-12 rounded w-full'>
                <div className='w-7'>
                    <Image className='w-full h-full mx-2r rounded-sm' alt='bus' src={bus} />
                </div>
              
                <div className='my-10'>
                    <p>Rustic Granite Gloves Robot Vacuum ZUSG4061 1600W</p>
                    <p>$433</p>
                </div>
            </div>
        </div>
    )
}

export default Card3