import React from 'react'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
const Footer = () => {
    return (
    <footer className="section footer">
        <ul className="footer-menu-list">
            <PageLinks />
        </ul>
        <ul className="footer-menu-icon">
            <SocialLinks />
        </ul>
        <p>Copyright &copy; Aaron travel tours company <span id='data'>{new Date().getFullYear()}</span> all rights reserved</p>
    </footer>
    )
}

export default Footer