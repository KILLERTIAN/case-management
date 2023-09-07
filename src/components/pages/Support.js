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
                    </li>
                    <li className="sup-card">
                        <img src="images/icons8-law-64.png" alt="" />
                        Judge Councelling
                    </li>
                    <li className="sup-card">

                        <img src="images/icons8-mail-64.png" alt="" />
                        Emails
                    </li>
                    <li className="sup-card">

                        <img src="images/icons8-error-64.png" alt="" />
                        Report error
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Support