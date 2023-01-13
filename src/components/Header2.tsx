import React, { useState } from 'react';

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='bg-white'>
            <div className='container mx-auto flex items-center justify-between p-4'>
                <div className='w-1/4'>
                    <h1 className='text-lg font-medium'>My App</h1>
                </div>
                <button className='text-black focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
                    <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z' fill='currentColor' />
                    </svg>
                </button>
            </div>
            <div className={`bg-gray-100 ${isOpen ? 'block' : 'hidden'} fixed z-10 top-0 right-0 bottom-0 w-64 transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='p-4'>
                    <h2 className='text-lg font-medium'>Sidebar</h2>
                    <p className='text-sm text-gray-600'>Some content here</p>
                </div>
            </div>
        </header>
    );
};

export default Header2;
