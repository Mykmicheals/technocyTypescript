import Image from 'next/image'
import React from 'react'
import game from '../../public/images/game.jpg'

var timeClass = 'bg-red-600 p-3 m-1 rounded text-white'

function DealCard() {
    return (
        <div className='relative col-span-2  h-44'>
            <div className=''>
                <Image className='rounded-md h-112` w-full' src={game} alt='game' />
            </div>
           
            <div className='absolute top-32 left-10'>
                <h3 className='mb-5 text-lg font-bold'>Deals of The Day</h3>
                <p className='w-2/4 mb-10 font-mono'>30% off all Home entertainment products for the next 05 days</p>
                <p className='italic mb-10'>Hurry up! Deals end in</p>
                <p>
                    <span className={timeClass}>30</span>
                    <span className={timeClass}>16</span>
                    <span className={timeClass}>55</span>
                    <span className={timeClass}>30</span>
                </p>

            </div>

        </div>
    )
}

export default DealCard