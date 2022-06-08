import React from 'react';
import './Experiance.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experiance = () => {
    return (
        <section id='experiance'>
            <h5>What Skills I Have</h5>
            <h2>My Experiance</h2>

            <div className="container experiance__container">
                <div className="experiance__frontend">
                    <h3>Front End Development</h3>
                    <div className="experiance__content">
                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Experianced</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>TAILWIND</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>React Js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
                <div className="experiance__backend">
                    <h3>Back End Development</h3>
                    <div className="experiance__content">

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>NODE JS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>EXPRESS JS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className='experiance__details'>
                            <BsPatchCheckFill className='experiance__details__icon' />
                            <div>
                                <h4>MONGODB</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiance;