import React from 'react'
import bus from '../../public/images/bus.jpg'
import Image from 'next/image'

function Card3() {
    return (
        <div className='bg'>
            <div className='bg-white flex gap-12 rounded w-full'>    
                    <Image height='80' className='my-8 ml-12 rounded-sm' alt='bus' src={bus} />
              
                <div className='my-10 w-3/4'>
                    <p className='text-sm font-mono'>Rustic Granite Gloves Robot Vacuum ZUSG4061 1600W</p>
                    <p className='text-sm font-mono my-2'>$433</p>
                </div>
            </div>
        </div>
    )
}

export default Card3