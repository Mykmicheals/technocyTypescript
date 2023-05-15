import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import Card4 from '../../src/components/Card4';
import { useRouter } from 'next/router'


var listClass = 'mb-6 font-mono hover:text-red-500 cursor-pointer capitalize'
var sectionClass = 'grid mx-4 md:mx-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2'

interface productState {
    products: {
        products: {
            data: any
        }
    }
}

var paginatebtn = 'px-2 py-2 bg-red-600 text-white rounded-sm ml-1 hover:bg-red-800'

function Category() {
    const router = useRouter()
    const detail = router.query

   

    const products: any = useSelector((state: productState) => state?.products.products.data)
    const phones = products?.filter((product) => product.category === detail.id)
    const paginate1 = phones?.slice(0, 6)

    const filteredItems = products?.filter((item) =>
        item.name.toLowerCase().includes(detail.id) || item.category.toLowerCase().includes(detail.id)
    );

    console.log(detail.search)
    
    const [currPage, setPage] = useState(detail.search?filteredItems:paginate1)

    return (
        <Fragment>
            <div className='my-20 pt-10 flex md:gap-0 lg:gap-4 bg-gray-300 lg:px-10'>
                <div className='lg:w-1/4 '>

                    <div className='bg-white px-10 py-10 hidden lg:block'>
                        <h2 className='font-bold mb-10 text-xl'>Product Categories</h2>
                        <ul>

                            <li className={listClass}>Computer gaming</li>
                            <li className={listClass}>Laptops</li>
                            <li className={listClass}>Mobiles</li>
                            <li className={listClass}>Telivisions</li>
                            <li className={listClass}>Uncategorised</li>
                            <li className={listClass}>Tablets</li>
                        </ul>
                    </div>


                    <div className='bg-white px-10 py-10 my-10'>
                        <h2 className='font-bold mb-10 text-xl'>Brands</h2>

                        <div>
                            <input type='radio' /> <span className='ml-2'>Apple</span>
                        </div>



                    </div>

                    <div className='bg-white px-10 py-10'>
                        <h2 className='font-bold mb-6 text-xl'>Product Categories</h2>

                        <div className='my-4'>
                            {Array.from({ length: 5 }, (_, i) => (
                                <span className='text-green-500' key={i}>★</span>
                            ))}

                            <span className='text-sm ml-2'>(12)</span>
                        </div>

                        <div className='my-4'>
                            {Array.from({ length: 4 }, (_, i) => (
                                <span className='text-green-500' key={i}>★</span>
                            ))}
                            {Array.from({ length: 1 }, (_, i) => (
                                <span key={i}>☆</span>
                            ))}
                            <span className='text-sm ml-2'>(9)</span>
                        </div>

                        <div className='my-4'>
                            {Array.from({ length: 3 }, (_, i) => (
                                <span className='text-green-500' key={i}>★</span>
                            ))}
                            {Array.from({ length: 2 }, (_, i) => (
                                <span key={i}>☆</span>
                            ))}
                            <span className='text-sm ml-2'>(12)</span>
                        </div>

                    </div>

                </div>

                <div className='lg:w-3/4 mx-auto py-10'>
                    <div className={sectionClass}>
                        {currPage?.map((product) => {
                            return (
                                <Card4
                                    id={product.id}
                                    key = {product.id}
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
                    <div className='mx-auto mt-28 text-center  '>
                        <button className={paginatebtn}>1</button>
                        <button onClick={() => {
                            setPage(phones?.slice(0, 7))
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }} className={paginatebtn}>2</button>

                        <button className={paginatebtn}>3</button>

                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Category