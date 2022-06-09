import React from 'react';
import './Testimonial.css';
import avtar1 from '../../asstes/images/avatar1.jpg';
import avtar2 from '../../asstes/images/avatar2.jpg';
import avtar3 from '../../asstes/images/avatar3.jpg';
import avtar4 from '../../asstes/images/avatar4.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const review = [
    {
        img: avtar1,
        name: 'Ernest Acheiver',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nam deleniti adipisci incidunt minus! Odio accusantium voluptatum soluta vitae ab enim unde perspiciatis at autem inventore facere tempore illo vel sed debitis libero velit, nesciunt iste! Repellendus aut neque itaque sunt! Minus error rem, temporibus beatae ut repudiandae explicabo quasi!'
    },
    {
        img: avtar2,
        name: 'Shatte Wale',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nam deleniti adipisci incidunt minus! Odio accusantium voluptatum soluta vitae ab enim unde perspiciatis at autem inventore facere tempore illo vel sed debitis libero velit, nesciunt iste! Repellendus aut neque itaque sunt! Minus error rem, temporibus beatae ut repudiandae explicabo quasi!'
    },
    {
        img: avtar3,
        name: 'Kawmi despacitw',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nam deleniti adipisci incidunt minus! Odio accusantium voluptatum soluta vitae ab enim unde perspiciatis at autem inventore facere tempore illo vel sed debitis libero velit, nesciunt iste! Repellendus aut neque itaque sunt! Minus error rem, temporibus beatae ut repudiandae explicabo quasi!'
    },
    {
        img: avtar4,
        name: 'Json DeCousta',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nam deleniti adipisci incidunt minus! Odio accusantium voluptatum soluta vitae ab enim unde perspiciatis at autem inventore facere tempore illo vel sed debitis libero velit, nesciunt iste! Repellendus aut neque itaque sunt! Minus error rem, temporibus beatae ut repudiandae explicabo quasi!'
    },
]

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review From Clients</h5>
            <h2>Testimonial</h2>

            <Swiper className="container testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    review.map(({ img, name, review }) => {
                        return (
                            <SwiperSlide className='testimonial'>
                                <div className="client__avatar">
                                    <img src={img} alt="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;