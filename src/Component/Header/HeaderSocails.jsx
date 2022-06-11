import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocails = () => {
    return (
        <div className='header__socails'>
            <a href="/https://www.linkedin.com/in/md-mehedi-hasan-16b412213/" target="_blank"><BsLinkedin /></a>
            <a href="/https://github.com/Mehedi-irfan" target="_blank"><FaGithub /></a>
            <a href="/" target="_blank"><FiDribbble /></a>
        </div>
    );
};

export default HeaderSocails;