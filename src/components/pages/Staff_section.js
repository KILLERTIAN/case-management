import React from 'react';
import { Link } from 'react-router-dom';


import './Staff_section.css';


function Staff_section() {
    return (
        <div >
            <section className='staff-main-body'>
                <img src="images/lawyer.avif" alt="" className='staff-sec-image' />
                <div className="staff-nav">
                    <h1 className='staff-question'>What would you like to do ?</h1>
                    <div className="staff-btn-nav">
                        <div>
                            <button className="staff-nav-button">
                                Add New Record
                            </button>
                            <button className="staff-nav-button">Schedule Hearing</button>
                        </div>
                        <div>
                            <button className="staff-nav-button">Upcoming hearing</button>
                            <button className="staff-nav-button">Evidence</button>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Staff_section;