import React from 'react'
import "./styles/AboutUsScreen.css"
import { Link } from 'react-router-dom'


const logo = require("../../assets/images/logo.png");
function AboutUsScreen() {
  return (
    <div className='about-us-screen-container'>
        <h3>Chúng tôi là Senik</h3>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="crop-logo" style={{maxWidth: '40vw'}}></img>
        </Link>
        <p>Senik là một công ty bán cây cảnh cho phép tuỳ chỉnh chậu cây theo phong cách cá nhân.</p>
    </div>
  )
}

export default AboutUsScreen