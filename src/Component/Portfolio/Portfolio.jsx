import React from 'react';
import './Portfolio.css';
import PortfolioImg from '../../asstes/images/portfolio1.jpg';
import PortfolioImg1 from '../../asstes/images/portfolio2.jpg';
import PortfolioImg2 from '../../asstes/images/portfolio3.jpg';
import PortfolioImg3 from '../../asstes/images/portfolio4.jpg';
import PortfolioImg4 from '../../asstes/images/portfolio5.png';

const data = [
    {
        id: 1,
        title: "This is a portfilio item title",
        img: PortfolioImg,
        github: "github.com",
        liveSite: 'liveSite'
    },
    {
        id: 2,
        title: "This is a portfilio item title",
        img: PortfolioImg1,
        github: "github.com",
        liveSite: 'liveSite'
    },
    {
        id: 3,
        title: "This is a portfilio item title",
        img: PortfolioImg2,
        github: "github.com",
        liveSite: 'liveSite'
    },
    {
        id: 4,
        title: "This is a portfilio item title",
        img: PortfolioImg3,
        github: "github.com",
        liveSite: 'liveSite'
    },
    {
        id: 5,
        title: "This is a portfilio item title",
        img: PortfolioImg4,
        github: "github.com",
        liveSite: 'liveSite'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, img, title, github, liveSite }) => {
                        return (
                            <article className='portfolio__item' key={id}>
                                <div className="portfolio__item_img">
                                    <img src={img} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item_cta">
                                    <a href={github} className='btn'>Live Site</a>
                                    <a href={liveSite} className='btn btn-primary'>See More</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    );
};

export default Portfolio;