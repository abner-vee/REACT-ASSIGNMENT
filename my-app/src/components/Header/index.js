import React from 'react'
import Luxe from "../../assets/Luxe.png";
import navBar from "../../assets/94 - Menu.png";
import title from "../../assets/title.png";
import "./index.css"

const Header = () => {
    return (
        <nav className='nav'>
            <div className='logo'>
                <img src={Luxe} alt='Logo' />
            </div>
            <div className='menuDiv'>
                <ul className='menuList'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>How we work</li>
                </ul>
            </div>
            <div className='navIcon'><img src={navBar} alt='NavBar' /></div>
        </nav>
    )
}
export default Header;