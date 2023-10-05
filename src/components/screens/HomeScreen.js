import React from 'react'
import './styles/HomeScreen.css'

import Banner from '../home/Banner'
import ProductHighlight from '../home/ProductHighlight'
import AboutUs from '../home/AboutUs'
import Categories from '../home/Categories'
import Testimonial from '../home/Testimonial'

const HomeScreen = () => {
  return (
    <div className='home-screen'>
        <Banner />
        <ProductHighlight />
        <AboutUs />
        <Categories />
        <Testimonial />
    </div>
  )
}

export default HomeScreen