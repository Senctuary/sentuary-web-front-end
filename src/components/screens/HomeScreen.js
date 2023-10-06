import React from 'react'
import './styles/HomeScreen.css'

import Banner from '../home/Banner'
import ProductHighlight from '../home/ProductHighlight'
import AboutUs from '../home/AboutUs'
import Categories from '../home/Categories'
import Testimonial from '../home/Testimonial'
import { Footer } from '../common/Footer'

const HomeScreen = () => {
  return (
    <div className='home-screen'>
        <Banner />
        <ProductHighlight />
        <AboutUs />
        <Categories />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default HomeScreen