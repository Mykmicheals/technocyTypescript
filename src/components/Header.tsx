import Image from 'next/image'
import React,{useState} from 'react'
import logo from '../../public/images/logo.svg'

function Header() {
    const [showCat, setCat]= useState(false)
    return (
        <div>
            <div className='py-10 grid xl:grid grid-cols-6  border-b-2 border-gray-300'>
                <div className='mx-20  md:flex gap-20 col-span-5'>
                    <Image alt='logo' src={logo} />
                    <div className='hidden md:visible flex gap-20'>
                        <div className=''>
                            <p>Send us a message</p>
                            <p>support.technocy@example.com</p>
                        </div>
                        <div>
                            <p>Need Help, call us</p>
                            <p>+84 2500 888 33</p>
                        </div>
                   </div>

                </div>
                <div className='xl:flex gap-8 hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>


                </div>
            </div>



            <div onMouseLeave={() => setCat(false)} className='hidden md:grid mx-20 py-5 gap-3 xl:gap-5 grid grid-cols-6 xl:grid-cols-8 relative'>
                <p onMouseEnter={() => setCat(true)}  className='my-0 mr-5 col-span-2 text-md flex gap-5 text-white font-mono bg-red-500 px-5 py-3 rounded cursor-pointer'>SHOP BY CATEGORIES

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </p>
                <p className='my-2 ml-5'>Contact</p>
                <p className='my-2'>About</p>
                <p className='my-2'>Hot deals</p>
                <p className='my-2'>Buy Now</p>
                <input placeholder='search for products' className='col-span-2 px-5 border-2 border-gray-300 ml-18 w-50 h-18 hidden xl:block  rounded-md py-2' />

               {showCat && <div className='absolute bg-white z-10 w-1/4 top-16 '>
                    <div className='flex gap-5 px-4 py-2 w-full border-b border-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                        <p className='text-gray-500'>Mobile</p>                      
                    </div>

                    <div className='flex gap-5 px-4 py-2 w-full border-b border-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                        <p className='text-gray-500'>Mobile</p>
                    </div>

                    <div className='flex gap-5 px-4 py-2 w-full border-b border-gray-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                        <p className='text-gray-500'>Mobile</p>
                    </div>

                
                </div>}

            </div>
        </div>
    )
}

export default Header