import Image from 'next/image'
import React,{useEffect, useState} from 'react'
import bannerTv from '../../public/images/tv.png'
import home2 from '../../public/images/home2.png'
import home3 from '../../public/images/home3.png'

import DoubleP from './DoubleP'
import { iconDelivery, iconReturn, iconMoney, iconCall } from './Icons';

var arrowLeft= 'absolute top-1/2 w-9 h-9 text-gray-300 left-10 bg-red-700 p-2 rounded-full'
var arrowRight= 'absolute top-1/2 w-9 h-9 text-gray-300 right-12 bg-red-700 p-2 rounded-full'

function Banner() {
    const[slider,setSlider] = useState({   
        first:true,
        second:false,
        third:false
    })
    useEffect(() => {
        console.log('good')
        if(slider.first===true){
             setTimeout(() => {
         setSlider({
             ['second']: true, ['first']: false, ['third']: false
         })
        }, 5000);
        }else if(slider.second===true){
                      setTimeout(() => {
         setSlider({
             ['second']: false, ['first']: false, ['third']: true
         })
        }, 5000)
        } else {
                setTimeout(() => {
         setSlider({
             ['second']: false, ['first']: true, ['third']: false
         })
        }, 5000);
    }
       
    },[slider])




    return (
        <div>
            <div>
               {slider.first && <div className='relative banner-bg grid grid-cols-12 '>
                 
                        <Image  className='w-full h-auto a-l-img col-span-9 lg:col-span-7' alt='banner-tv' src={bannerTv} />
                  
                   
                    <div className=' my-20 lg:col-span-3 lg:block'>
                        {/* <div className='absolute right-1/6 top-24'> */}
                        <p className='sm-a font-mono'>Mid week deals</p>
                        <h4 className='animate-hero-h text-2xl my-10'>THE GOLD STANDARDS OF TELEVISION</h4>
                        <p className='animate-hero-p italic'>Up to 40% off on 4k tv series</p>
                        <p className='sm-a text-white w-32 bg-gray-700 rounded-md px-5 py-3 my-5'>Shop Now</p>
                    </div>
                </div>}

                            {slider.second && <div className='relative banner-bg grid grid-cols-12 '>
                    <Image className='a-l-img col-span-9 lg:col-span-7' alt='banner-tv' src={home2} />
                    <div className=' my-20 lg:col-span-3 lg:block'>
                        {/* <div className='absolute right-1/6 top-24'> */}
                        <p className='sm-a font-mono'>Mid week deals</p>
                        <h4 className='animate-hero-h text-2xl my-10'>YOUR FIRST STEP INTO SMART FITNESS</h4>
                        <p className='animate-hero-p italic'>Up to 20% off smart watches</p>
                        <p className='sm-a text-white w-32 bg-gray-700 rounded-md px-5 py-3 my-5'>Shop Now</p>
                    </div>
                </div>}

                             {slider.third && <div className='relative banner-bg grid grid-cols-12 '>
                    <Image className='a-l-img col-span-9 lg:col-span-7' alt='banner-tv' src={home3} />
                    <div className=' my-20 lg:col-span-3 lg:block'>
                        {/* <div className='absolute right-1/6 top-24'> */}
                        <p className='sm-a font-mono'>Mid week deals</p>
                        <h4 className='animate-hero-h text-2xl my-10'>THE BEST MADE PHONES</h4>
                        <p className='animate-hero-p italic'>Up to 13% off christmas deals</p>
                        <p className='sm-a text-white w-32 bg-gray-700 rounded-md px-5 py-3 my-5'>Shop Now</p>
                    </div>
                </div>}
                {/* <p className='bg-red-400 w-1/8 p-4 mb-4'>Left</p>
                    <p onClick={()=>setSlider({['third']:true})} className='bg-red-400 w-1/8 p-4'>Right</p> */}

            </div>
           




            <div className='mx-20 my-10 flex flex-wrap gap-24'>
                <DoubleP icon={iconDelivery} header='Free delivery' paragraph='Free shipping over $100' />
                <DoubleP icon={iconReturn} header='Free Return' paragraph='Free return over $100' />
                <DoubleP icon={iconCall} header='Customer Support' paragraph='Friendly 24/7 customer support' />
                <DoubleP icon={iconMoney} header='Money Back guarantee' paragraph='Free shipping over $100' />

            </div>
        </div>
    )
}

export default Banner