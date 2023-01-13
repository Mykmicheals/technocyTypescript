import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import Card4 from '../components/Card4';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
import Slider from '../components/Caraosel';


function Homescreen() {

    // const products = useSelector((state) => state.products.products)


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