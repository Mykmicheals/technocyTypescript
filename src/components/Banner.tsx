import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import bannerTv from '../../public/images/tv.png'
import home2 from '../../public/images/home2.png'
import home3 from '../../public/images/home3.png'
import Fade from "react-reveal/Fade";

//import DoubleP from './DoubleP'
import { iconDelivery, iconReturn, iconMoney, iconCall } from './Icons';

var arrowLeft = 'absolute top-1/2 w-9 h-9 text-gray-300 left-10 bg-red-700 p-2 rounded-full'
var arrowRight = 'absolute top-1/2 w-9 h-9 text-gray-300 right-12 bg-red-700 p-2 rounded-full'
var shopNowClass = 'text-white w-32 bg-gray-700 rounded-md px-5 py-3 my-5 mx-auto'

function Banner() {
    const [slider, setSlider] = useState({
        first: true,
        second: false,
        third: false
    })
    useEffect(() => {
        if (slider.first === true) {
            setTimeout(() => {
                setSlider({
                    ['second']: true, ['first']: false, ['third']: false
                })
            }, 5000);
        } else if (slider.second === true) {
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

    }, [slider])


    var imageClass = 'w-92 ml-4 mt-8 h-76 a-l-img col-span-12 lg:col-span-7'
    var sliderDiv = 'my-5 lg:my-20 col-span-12 text-center lg:col-span-3 lg:block mt-10'
    var sliderOuter = 'relative banner-bg grid grid-cols-12 h-120'

    return (
        <div>
            <div>
                {slider.first && <div className={sliderOuter}>

                    <Image className={imageClass} alt='banner-tv' src={bannerTv} />
                    <div className={sliderDiv}>
                        <Fade down>  <p className='font-mono'>Mid week deals</p> </Fade>
                        <Fade delay={300} right> <h4 className='text-2xl my-10'>THE GOLD STANDARDS OF TELEVISION</h4> </Fade>
                        <Fade delay={500} left> <p className=' italic'>Up to 40% off on 4k tv series</p> </Fade>
                        <Fade delay={700} up> <p className={shopNowClass}>Shop Now</p></Fade>
                    </div>
                </div>}

                {slider.second && <div className={sliderOuter}>
                    <Image className={imageClass} alt='banner-tv' src={home2} />

                    <div className={sliderDiv}>
                        <Fade down>  <p className='font-mono'>Mid week deals</p> </Fade>
                        <Fade delay={300} right> <h4 className='text-2xl my-10'>THE GOLD STANDARDS OF TELEVISION</h4> </Fade>
                        <Fade delay={500} left> <p className=' italic'>Up to 40% off on 4k tv series</p> </Fade>
                        <Fade delay={700} up> <p className={shopNowClass}>Shop Now</p></Fade>
                    </div>
                </div>}

                {slider.third && <div className={sliderOuter}>
                    <Image className={imageClass} alt='banner-tv' src={home3} />
                    <div className={sliderDiv}>
                        <Fade down>  <p className='font-mono'>Mid week deals</p> </Fade>
                        <Fade delay={300} right> <h4 className='text-2xl my-10'>THE GOLD STANDARDS OF TELEVISION</h4> </Fade>
                        <Fade delay={500} left> <p className=' italic'>Up to 40% off on 4k tv series</p> </Fade>
                        <Fade delay={700} up> <p className={shopNowClass}>Shop Now</p></Fade>
                    </div>
                </div>}
                {/* <p className='bg-red-400 w-1/8 p-4 mb-4'>Left</p>
                    <p onClick={()=>setSlider({['third']:true})} className='bg-red-400 w-1/8 p-4'>Right</p> */}

            </div>





            {/* <div className='mx-20 my-10 flex flex-wrap gap-24'>
                <DoubleP icon={iconDelivery} header='Free delivery' paragraph='Free shipping over $100' />
                <DoubleP icon={iconReturn} header='Free Return' paragraph='Free return over $100' />
                <DoubleP icon={iconCall} header='Customer Support' paragraph='Friendly 24/7 customer support' />
                <DoubleP icon={iconMoney} header='Money Back guarantee' paragraph='Free shipping over $100' />

            </div> */}
        </div>
    )
}

export default Banner