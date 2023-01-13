import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../src/components/Header'
import Image from 'next/image'

var serverHost = 'http://127.0.0.1:8000/'

var listClass = 'mb-6 font-mono hover:text-red-500 cursor-pointer capitalize'
function Index() {

    const [related, setRelated] = useState([])

    const router = useRouter()
    const detail = router.query
    var catList = detail.category
    return (
      
           
        <div className='px-20 bg-gray-300 '>
           
                <div className='my-20 pt-10  flex gap-10'>
                    
                        
                    <div className='w-1/4 bg-white px-10 pt-10'>
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
                    <div className='w-3/4 bg-white py-10 px-10 rounded-md'>
                            <h2 className='text-2xl font-bold w-3/4 font-mono'>{detail?.name}</h2>
                        <div className='flex gap-20 my-10'>
                            
                            <div className='w-1/3'>
                                <Image width={300}
                                height={300}
                                src={`${serverHost}${detail.image}`} alt={detail.name} />
                            </div>      
                                
                                <div className='w-2/3 '>
                                    <p className='text-xl text-red-700 font-bold mb-8 '>N{detail?.price}</p>
                                    <p className='font-mono tracking-wider'>{detail.description?.slice(0,180)}.</p>

                                    <button className='bg-red-700 rounded py-2 px-4 my-8 text-white hover:bg-red-800'>
                                        
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline mr-4 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                        add to cart
                                        </button>
                                    
                                </div>
                                                
                            </div>
                
                        </div>
                        
    <div>

    </div>
                    
                    
                </div>

                <div>
                <h3 className='text-3xl font-bold font-serif mb-8'>Related products</h3>
                <div></div>
                </div>
        </div>
      
    )
}

export default Index