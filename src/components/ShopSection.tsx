import React from 'react'
import Card4 from './Card4';
import DealCard from './DealCard'

import Card2 from './Card2';
import Card3 from './Card3';
import ImageCard from './ImageCard';
import SectionHead from './SectionHead';
import { useSelector } from 'react-redux';
import { productsStore } from '../store';

interface productState {
    products: {
        products: {
            data: any
        }
    }
}

function ShopSection() {
    const products: any = useSelector((state: productState) => state?.products.products.data)
    var featured = products?.slice(8, 13)
    const phones = products?.filter((product) => product.category === 'Phones').slice(0, 5)
    const laptops = products?.filter((product) => product.category === 'Laptops').slice(0, 5)
    const tv = products?.filter((product) => product.category === 'Television').slice(0, 5)



    //  var sectionClass = 'flex justify-center gap-1 mb-10 lg:mx-8'
    var sectionClass = 'grid mx-4 md:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 my-8'



    return (
        <div className='bg-gray-100 my-0 py-10'>

       

            <div>
                <SectionHead
                    id='FEATURED PRODUCTS'

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
                    id='Phones'

                />
                <div className={sectionClass}>
                    {phones?.map((product) => {
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

            {/* <div className=''>
                <SectionHead
                    id='NEW ARRIVALS'
                />
                <div className="mx-20 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <Card3 />
                    <Card3 />
                    <Card3 />
                    <Card3 />
                    <Card3 />
                    <Card3 />
                </div>

            </div> */}

            <div>
                <SectionHead
                    id='Laptops'
                />
                <div className={sectionClass}>
                    {laptops?.map((product) => {

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

            <div>
                <ImageCard />
            </div>

            <div>
                <SectionHead
                    id='Televisions'
                />
                <div className={sectionClass}>
                    {tv?.map((product) => {

                        return (
                            <Card4
                                id={product.id}
                                key={product.id}
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

        </div>

    )
}

export default ShopSection