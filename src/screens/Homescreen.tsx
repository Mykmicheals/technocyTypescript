import React from 'react'
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import Cart from '../components/Cart';



function Homescreen() {

    return (
        <div className='relative'>
            <Banner />
            <ShopSection />
            <Cart />

        </div>
    )
}

export default Homescreen