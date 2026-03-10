import React, { useState } from 'react'
import SocialLinks from './SocialLinks'
import PageLinks from './PageLinks'
import { pageLinks,socialLinks } from '../../data'
import logo from "../assets/tourlogo.png"
const Navbar = () => {
    const [isTogghled,setToggle] = useState(false);
    const handleToggle = () =>{
        setToggle(!isTogghled);
    }
    return (
        <nav className="navbar">
            <div className="container navbar-flex">
                <a href="#home" className="logo">
                <img src={logo} alt="" className="logo" /></a>   
                <div className="main-menu">
                    <ul className="main-menu-list">
                        <PageLinks />
                    </ul>
                    <ul className="main-menu-icons">
                        <SocialLinks />
                    </ul>
                </div>
                <div className="mobile-menu">
                    <div className="mobile-menu-toggle" onClick={handleToggle}>
                        <i className="fa-brands fa-docker"></i>
                    </div> 
                    <div className={`mobile-menu-item ${isTogghled?"active":""}`}>
                        <ul className="mobile-menu-list">
                            <PageLinks/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar