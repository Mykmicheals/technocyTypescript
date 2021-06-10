import React from 'react'
import Card4 from './Card4';
import DealCard from './DealCard'

import Card2 from './Card2';
import Card3 from './Card3';
import ImageCard from './ImageCard';
import SectionHead from './SectionHead';

function ShopSection() {
    return (
        <div className='bg-gray-100 '>
            {/* <div className='flex flex-wrap lg:mx-20 pt-10 py-5 grid grid-cols-2 lg:grid-cols-4 gap-2'> */}
            <div className='flex gap-1 flex-wrap mb-5 pt-10 justify-center' >
                <DealCard />
                <Card4 />
                <Card4 />

            </div>
            <div>
                <SectionHead
                    Heading='FEATURED PRODUCTS'
                />
                <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>

                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                </div>
            </div>
           
            <Card2 />

            <div className=''>
                <SectionHead
                Heading='NEW ARRIVALS'
                />
                <div className='mx-20  gap-5 grid grid-cols-3'>
                    <Card3 />
                    <Card3 />
                    <Card3 />

                    <Card3 />
                    <Card3 />
                    <Card3 />
                </div>
            </div>

            <div>
                <ImageCard />
            </div>

            <div>
                <SectionHead
                    Heading='Top Selling Items'
                />
                <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>

                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                </div>
            </div>

           

        </div>

    )
}

export default ShopSection