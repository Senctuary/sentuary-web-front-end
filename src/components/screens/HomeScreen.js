import React from 'react'
import './styles/HomeScreen.css'

import Banner from '../home/Banner'
import ProductHighlight from '../home/ProductHighlight'

const HomeScreen = () => {
  return (
    <div className='home-screen'>
        <Banner />
        <ProductHighlight />
    </div>
  )
}

export default HomeScreen