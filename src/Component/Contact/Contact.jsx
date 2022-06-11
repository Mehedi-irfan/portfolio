import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v6113au', 'template_u2ullhc', form.current, 'user_8l20h8WITtZ02Yx20Q36j');
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option_icon' />
                        <h4>Email</h4>
                        <h5>mehediirfan99@gmail.com</h5>
                        <a href="mailto:mehediirfan99@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option_icon' />
                        <h4>Messanger</h4>
                        <h5>Mehedi Irfan</h5>
                        <a href="https://m.me/mehedihasanirfann" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option_icon' />
                        <h4>Whatsapp</h4>
                        <h5>+01892054369</h5>
                        <a href="https://api.whatsapp.com/send?phone=8801892054369" target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTION  */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter Your Full Name' required />
                    <input type="email" name="email" placeholder='Enter Your Email' id="" required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;