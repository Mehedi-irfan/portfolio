import React from 'react';
import './About.css';
import AboutME from '../../asstes/images/20191106091849_IMG_1222-removebg-preview.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={AboutME} alt="" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experiance</h5>
                            <small>1 Years Experiance</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>5 Clients Handle</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10 Projects</small>
                        </article>

                    </div>
                    <p>I am a Front End developer based in Bangladesh. I have developed multiple MERN stack projects and 10+ Front End projects. Programming is my passion. I devote my full attention to designing and building websites. My biggest strength is I never stop learning and never give up when getting any Bugs / Errors on the code. Rather than spending hours trying to figure it out. I try several methods. Eventually, I found and fixed the problem.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;