import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar_menu_citizen.css';

function sidebar_menu_citizen() {
    return (
        <section className="citizen_sidebar">
            <ul className="citizen_sidebar_menu">
                <li>
                    <Link to='/citizen-section/new-case'>New Case</Link>
                </li>
                <li>
                    <Link to='/citizen-section/upcoming-hearing'>Upcoming Hearings</Link>
                </li>
                <li>
                    <Link>Past Hearing</Link>
                </li>
                <li>
                    <Link>Withness & Evidence</Link>
                </li>
            </ul>
        </section>
    )
}

export default sidebar_menu_citizen