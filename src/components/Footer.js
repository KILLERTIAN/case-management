import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Enter your email here to get updates regarding your case
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <button className='footer-submit-button'>Submit</button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/about'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>Get In Touch</Link>
                        <Link to='/sign-up'>Support</Link>

                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    {/* <div class='footer-link-items'>
                        <h2>Games</h2>
                        <Link to='/games'>Suggest games</Link>
                        <Link to='/games'>Minecraft</Link>
                        <Link to='/games'>Play togther</Link>
                        <Link to='/games'>Influencer</Link>
                    </div> */}
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Case Management
                        </Link>
                    </div>
                    <small class='website-rights'>Case Management © 2023</small>
                    {/* <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <ion-icon name="logo-facebook"></ion-icon>
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <ion-icon name="logo-instagram"></ion-icon>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <ion-icon name="logo-twitter"></ion-icon>
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Footer;