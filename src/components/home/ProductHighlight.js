import React from 'react'
import './styles/ProductHighlight.css'
import Card from '../common/card/Card'
import SeeMoreButton from '../common/buttons/SeeMoreButton'

const ProductHighlight = () => {
  return (
    <div className='product-highlight'>
      <div className='product-highlight__title'>
        <h2>Best Selling Plants</h2>
        <p style={{fontSize: "0.85rem", marginBottom: "1rem", color: "#B6B5B5"}}>Easiest way to healthy life by buying your favorite plants</p>
        <SeeMoreButton />
      </div>
      <div className='product-highlight__gallery'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
)}

export default ProductHighlight