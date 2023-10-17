import React from 'react';
import { Link } from 'react-router-dom';
import './Citizen_section.css';


function Citizen_section() {
    return (
        <div >

            <section className='citizen-main-body'>
                <img src="images/8777961.jpg" alt="" className='citizen-sec-image' />
                <div className="citizen-nav">
                    <h1 className='citizen-question'>What would you like to do ?</h1>
                    <div className="citizen-btn-nav">
                        <div className='citizen-btn-nav-sort'>
                            <Link to='/new-case' className="citizen-nav-button">
                                File a New Case
                            </Link>
                            <Link className="citizen-nav-button">Upcoming Hearing</Link>
                        </div>
                        <div className='citizen-btn-nav-sort'>
                            <Link className="citizen-nav-button">Past hearing</Link>
                            <Link className="citizen-nav-button">Upload Evidence</Link>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Citizen_section;