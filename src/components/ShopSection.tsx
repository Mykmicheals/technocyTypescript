import React from 'react'
import Card4 from './Card4';
import DealCard from './DealCard'

import Card2 from './Card2';
import Card3 from './Card3';
import ImageCard from './ImageCard';
import SectionHead from './SectionHead';

import { useSelector } from 'react-redux';

function ShopSection() {
    const products = useSelector((state) => state.products.products.data)
    var featured = products?.slice(8, 12)
    const phones = products?.filter((product) => product.category === 'Phones').slice(0, 4)
    const laptops = products?.filter((product) => product.category === 'Laptops').slice(0, 4)
    const tv = products?.filter((product) => product.category === 'Television').slice(0, 4)

    const find = featured?.find((each) => each.id === 10)

    // console.log(find)

    return (
        <div className='bg-gray-100 '>
            {/* <div className='flex flex-wrap lg:mx-20 pt-10 py-5 grid grid-cols-2 lg:grid-cols-4 gap-2'> */}
            <div className='flex gap-1 flex-wrap mb-5 pt-10 justify-center' >
                <DealCard />
                {/* <Card4 />
                <Card4 /> */}

            </div>
            <div>
                <SectionHead
                    Heading='FEATURED PRODUCTS'
                />
                <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>



                    {featured?.map((product) => {
                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                            />
                        )
                    })}
                </div>
            </div>

            <Card2 />

            <div>
                <SectionHead
                    Heading='Phones'
                />
                <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>
                    {phones?.map((product) => {
                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                            />
                        )
                    })}
                </div>
            </div>

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
                <SectionHead
                    Heading='Laptops'
                />
                <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>
                    {laptops?.map((product) => {

                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                            />
                        )
                    })}
                </div>
            </div>

            <div>
                <ImageCard />
            </div>

            <div>
                <SectionHead
                    Heading='Televisions'
                />
                <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>
                    {tv?.map((product) => {

                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                            />
                        )
                    })}
                </div>
            </div>

            <div>
                <SectionHead
                    Heading='Top Selling Items'
                />
                {/* <div className='flex flex-wrap justify-center gap-2 mb-10 lg:mx-20'>

                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                </div> */}
            </div>



        </div>

    )
}

export default ShopSection