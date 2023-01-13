import React, { useState, useEffect } from 'react';
import bannerTv from '../../public/images/tv.png'
import home2 from '../../public/images/home2.png'
import home3 from '../../public/images/home3.png'
import Image from 'next/image'

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentItem = items[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % items.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, items.length]);

    return (
        <div className='relative w-full banner-bg h-screen'>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`absolute left-0 opacity-0 transition-all duration-300 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'translate-x-full'}`}
                >
                    <Image src={item.image} alt={item.title} className='w-full h-full object-cover rounded-md' />

                </div>
            ))}


            {/* {items.map((item, index) => (
                <div
                    key={item.id}
                    className='relative flex items-center mt-20  mx-16'
                >
                    <div
                        className={`absolute left-0 top-20 opacity-0 transition-all duration-300 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'translate-x-full'}`}
                    >
                        <Image src={item.image} alt={item.title} className='w-full h-full object-cover rounded-md' />
                    </div>
                    <div
                        className={`absolute right-0 m-4 lg:m-8 opacity-0 transition-all duration-300 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'translate-x-full'}`}
                    >
                        <p className='text-3xl font-bold'>{item.title}</p>
                        <p className='text-xl'>{item.description}</p>
                        <p className='animate-hero-p italic'>Up to 13% off christmas deals</p>
                        <p className='sm-a text-white w-32 bg-gray-700 rounded-md px-5 py-3 my-5'>Shop Now</p>
                    </div>
                </div>
            ))} */}



            <button
                className='absolute top-0 right-0 m-4 lg:m-8 z-10'
                onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            <button
                className='absolute top-0 left-0 m-4 lg:m-8 z-10'
                onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
            </button>
        </div>
    );
};

const Slider = () => {
    const items = [
        { id: 1, image: bannerTv, title: 'Mid week deal', description: 'THE BEST MADE PHONES' },
        { id: 2, image: home2, title: 'Mid week deal', description: 'THE BEST MADE PHONES' },
        { id: 3, image: home3, title: 'Mid week deal', description: 'THE BEST MADE PHONES' },
        //  { id: 4, image: '/image4.jpg', title: 'Image 4' },
    ];

    return <Carousel items={items} />;
};

export default Slider;
