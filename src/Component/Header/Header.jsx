import React from 'react';
import CTA from './CTA';
import './Header.css';
import ME from '../../asstes/images/20191106091849_IMG_1222-removebg-preview (1).png';
import HeaderSocails from './HeaderSocails';


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h2>Mehedi Hasan Irfan</h2>
                <h5 className="text-light">Front End Developer</h5>
                <CTA />

                <HeaderSocails />

                <div className="me">
                    <img src={ME} alt={ME} />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;