import React from 'react'
import Card4 from './Card4';
import DealCard from './DealCard'

import Card2 from './Card2';
import Card3 from './Card3';
import ImageCard from './ImageCard';
import SectionHead from './SectionHead';
import { useSelector } from 'react-redux';
import { productsStore } from '../store';

function ShopSection() {
    const products = useSelector((state) => state?.products.products.data)
    const product = useSelector(productsStore)
    // const products = product.products
    var featured = products?.slice(8, 13)
    const phones = products?.filter((product) => product.category === 'Phones').slice(0, 5)
    const laptops = products?.filter((product) => product.category === 'Laptops').slice(0, 5)
    const tv = products?.filter((product) => product.category === 'Television').slice(0, 5)



  //  var sectionClass = 'flex justify-center gap-1 mb-10 lg:mx-8'
    var sectionClass = 'grid mx-4 md:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'

    

    return (
        <div className='bg-gray-100 '>
            {/* <div className='flex flex-wrap lg:mx-20 pt-10 py-5 grid grid-cols-2 lg:grid-cols-4 gap-2'> */}
            <div className='flex gap-1 flex-wrap mb-5 pt-10 justify-center' >
                <DealCard />

                
                
                {/* <Card4
                    key={products[14]?.id}
                    id={products[14]?.id}
                    name={products[14]?.name}
                    category={products[14]?.category}
                    img={products[14]?.image}
                    price={products[14]?.price}
                    description={products[14]?.description}
                    star={products[14]?.star}
                />

                <Card4
                    key={products[14]?.id}
                    id={products[14]?.id}
                    name={products[14]?.name}
                    category={products[14]?.category}
                    img={products[14]?.image}
                    price={products[14]?.price}
                    description={products[14]?.description}
                    star={products[14]?.star}
                /> */}
                {/* <Card4 />  */}

            </div>
            <div>
                <SectionHead
                    Heading='FEATURED PRODUCTS'
                />
                <div className={sectionClass}>



                    {featured?.map((product) => {
                        return (
                            <Card4
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                                description={product.description}
                                star={product.star}
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
                <div className={sectionClass}>
                    {phones?.map((product) => {
                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                                description={product.description}
                                star={product.star}
                            />
                        )
                    })}
                </div>
            </div>

            <div className=''>
                <SectionHead
                    Heading='NEW ARRIVALS'
                />
                <div className="mx-20 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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
                <div className={sectionClass}>
                    {laptops?.map((product) => {

                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                                description={product.description}
                                star={product.star}
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
                <div className={sectionClass}>
                    {tv?.map((product) => {

                        return (
                            <Card4
                                id={product.id}
                                name={product.name}
                                category={product.category}
                                img={product.image}
                                price={product.price}
                                description={product.description}
                                star={product.star}
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