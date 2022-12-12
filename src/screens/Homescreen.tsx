import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import Card4 from '../components/Card4';
import Cart from '../components/Cart';


function Homescreen() {
    return (
        <div className='relative'>
            <Header />
            <Banner />
            <ShopSection />
            <Cart />

        </div>
    )
}

export default Homescreen