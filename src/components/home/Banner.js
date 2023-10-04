import React from 'react';
import './styles/Banner.css';
const rightArrow = require('../../assets/images/right-arrow.png');
const leftArrow = require('../../assets/images/left-arrow.png');
const cactusHighlight = require('../../assets/images/cactus-highlight.png');


const Banner = () => {
  return (
    <div className='banner'>
        <div class="text-element">
            <h1 style={{width: "35rem", fontSize: "78.4px", textAlign: "left", marginLeft: "2rem"}}>Buy your dream plant</h1>
            <div class="intro-element">
                <span style={{fontSize: "18.4px"}}>
                    <p style={{fontSize: "38.4px", margin: "0"}}>50+</p> <br></br>     Plants species 
                </span>
                <div style={{margin: "0 30px", width: "3px", height: "100%", backgroundColor: "#1E1E1E"}}></div>
                <span style={{fontSize: "18.4px"}}>
                    <p style={{fontSize: "38.4px", margin: "0"}}>100+</p> <br></br>   Customers
                </span>
            </div> 
            <div class="search-element">
                <input className='search-bar' type="text" placeholder="What are you looking for?"/>
                <button className='search-button'>
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div class="image-element">
            <div class="animated-element">
                <img style={{ height: "100px", position: "relative", left: "200px", top: "100px"}} src={rightArrow} alt="Image 1"/>
            </div>
            <img src={cactusHighlight} alt="Image 1"/>
            <div class="animated-element">
                <img style={{ height: "100px", position: "relative", left: "-200px"}} src={leftArrow} alt="Image 1"/>
            </div>
        </div>
    </div>
  )
}

export default Banner;