import React from 'react'
import './styles/Categories.css'
import CategoryCard from '../common/card/CategoryCard'
import ExploreButton from '../common/buttons/ExploreButton'

const Categories = () => {
  return (
    <div className='categories'  style={{maxWidth: "1280px"}}>
      <div className='categories-title'>
        <h1>Categories</h1>
        <p style={{color: "#1E1E1E80"}}>Order now and appreciate the beauty of nature</p>  
      </div>
      <div className='category-card-container'>
        <div style={{position: "relative", top: "-5rem", left: "2rem"}}>
          <CategoryCard title="Natural Plants" />
        </div>

        <div>
          <CategoryCard title="Plant Accessories" />
        </div>

        <div style={{position: "relative", top: "-5rem", right: "2rem"}}>
          <CategoryCard title="Artificial Plants" />
        </div>
      </div>
      
      <div className='explore-btn'>
        <p style={{width: "19.3125rem", color: "#1E1E1E80", marginBottom: "1rem"}}>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button id="explore-btn">
          Explore 
          <i className="fa fa-arrow-right" style={{marginLeft: "0.5rem", color: "#1E1E1E"}}></i>
        </button>
      </div>
    </div>
  )
}

export default Categories