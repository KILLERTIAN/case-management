import React from 'react';

import "./Support.css"

function Support() {
    return (
        <div className="sup-container">
            <section className='upper-section'>
                <h2 className='support-heading'>Hi, how can we help you?</h2>
                <div className="full-search-bar">
                    <input type="text" className='search-bar' placeholder='Search our support' />
                    <button className='search-btn'>
                        Search
                    </button>
                </div>
                <img className='support-back-image' src="images/support-background.jpg" alt="" />
            </section>
            <section className='bottom-container'>
                <ul className="sup-items">
                    <li className="sup-card">

                        <img src="images/icons8-emergency-64.png" alt="" />
                        Emergency
                        <span>If you need help with a emergency case contact us through here</span>
                    </li>
                    <li className="sup-card">
                        <img src="images/icons8-law-64.png" alt="" />
                        Judge Councelling
                        <span>If you want to discuss your case
                            with a professional judge </span>
                    </li>
                    <li className="sup-card">

                        <img src="images/icons8-mail-64.png" alt="" />
                        Emails
                        <span>Email us your doubts regarding our services</span>
                    </li>
                    <li className="sup-card">

                        <img src="images/icons8-error-64.png" alt="" />
                        Report error
                        <span>Report any error /bug you are facing regarding the website services</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Support