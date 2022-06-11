import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="/" className='footer__logo'>Mehedi Irfan</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiance">Experiance</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__scails">
                <a href="/https://web.facebook.com/mehedihasanirfann/"><FaFacebookF /></a>
                <a href="/"><FiInstagram /></a>
                <a href="/"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Mehedi Irfan, All rights Reserved</small>
            </div>
        </footer>
    );
};

export default Footer;