import React from 'react'
import button from "../../assets/button.png";
import image from "../../assets/image.png";
import "./Hero.css"

const Hero = () => {
  return (
    <div className='Hero'>
        <div>
        <div className='myDiv'>
            <p className='hi'>Hi, there!</p>
            <h1 className='luxeAssistance'>LUXE IS HERE TO BE YOUR ASSISTANCE</h1>
            <p>I am here ready to help you in making creative digital products</p>
        </div>
        <div className='button'><img src = {button} alt='button'/></div>
        </div>
        <div className='image'><img src={image} alt='image'/></div>
    </div>
  )
}

export default Hero;