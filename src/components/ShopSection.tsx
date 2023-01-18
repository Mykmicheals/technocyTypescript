import React from 'react'
import Card4 from './Card4';
import DealCard from './DealCard'

import Card2 from './Card2';
import Card3 from './Card3';
import ImageCard from './ImageCard';
import SectionHead from './SectionHead';
import { useSelector } from 'react-redux';
import { productsStore } from '../store';

import iphone from '../../public/images/iphone13.jpg'
import mcbook from '../../public/images/mcbook.jpg'

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
    const tv = products?.filter((product) => product.category === 'Televisions').slice(0, 5)



  //  var sectionClass = 'flex justify-center gap-1 mb-10 lg:mx-8'
    var sectionClass = 'grid mx-4 md:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'

    

    return (
        <div className='bg-gray-100 '>
          
            <div className='flex gap-1 flex-wrap mb-5 pt-10 justify-center' >   
               <DealCard />           
                    <Card4
                        key='762'
                        id='762'
                        name='Apple IPhone 13 6.1" , (4GB RAM + 128GB ROM), IOS 15 - Midnight'
                        category='Iphone'
                        img={iphone}
                        price='580,000'
                        description='good products'
                        star='5'
                    />

                    <Card4
                        key='762'
                        id='762'
                        name='Apple IPhone 13 6.1" , (4GB RAM + 128GB ROM), IOS 15 - Midnight'
                        category='Iphone'
                        img={iphone}
                        price='580,000'
                        description='good products'
                        star='5'
                    />  
            </div>
            
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

            <div className=''>
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

            </div>

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

            <div>
                <SectionHead
                    id='Top Selling Items'
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