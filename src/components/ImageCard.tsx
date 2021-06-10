import React from 'react'
import pho from '../../public/images/pho.jpg'
import rad  from '../../public/images/rad.jpg'
import wrist from '../../public/images/wrist.jpg'
import Image  from 'next/image';

function ImageCard() {
  return (
      <div className='mx-20 flex gap-2 my-12'>
          <div className='relative cursor-pointer'>
              <Image alt='radio' className='rounded-lg' src={wrist} />
              <div className='absolute top-10 left-52 w-1/8'>
                  <p className='w-2/3 mb-4 bg-gray-200 py-1 text-sm px-2 rounded  text-black'>Gadget Zone</p>
                  <p className='w-1/2 text-black'>UP TO 30% OFF ON GADGETS</p>
              </div>
                
          </div>

          <div className='relative'>
              <Image alt='radio' className='rounded-lg' src={rad} />
              <div className='absolute top-10 left-52 w-1/8'>
                  <p className='w-2/3 mb-4 bg-gray-200 py-1 text-sm px-2 rounded  text-black'>Gadget Zone</p>
                  <p className='w-1/2 text-white'>UP TO 30% OFF ON GADGETS</p>
              </div>

          </div>

          <div className='relative'>
              <Image alt='radio' className='rounded-lg' src={pho} />
              <div className='absolute top-10 left-52 w-1/8'>
                  <p className='w-2/3 mb-4 bg-gray-200 py-1 text-sm px-2 rounded  text-black'>Gadget Zone</p>
                  <p className='w-1/2 text-black'>UP TO 30% OFF ON GADGETS</p>
              </div>

          </div>

        
    </div>
  )
}

export default ImageCard