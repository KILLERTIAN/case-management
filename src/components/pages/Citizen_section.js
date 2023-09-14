import React from 'react';
import { Link } from 'react-router-dom';

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import sidebar_menu_citizen from './sidebar_menu_citizen';
import './Citizen_section.css'


function Citizen_section() {
    return (
        <div >

            <section className='citizen-main-body'>
                <img src="images/8777961.jpg" alt="" className='citizen-sec-image' />
                <div className="citizen-nav">
                    <h1 className='citizen-question'>What would you like to do ?</h1>
                    <div className="citizen-btn-nav">
                        <div>
                            <button className="citizen-nav-button">
                                File a New Case
                            </button>
                            <button className="citizen-nav-button">Upcoming Hearing</button>
                        </div>
                        <div>
                            <button className="citizen-nav-button">Past hearing</button>
                            <button className="citizen-nav-button">Upload Evidence</button>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Citizen_section;