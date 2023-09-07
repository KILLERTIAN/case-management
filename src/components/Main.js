import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
    return (
        <div className="container-main">
            {/* <div className="text-button"> */}
            <h1 className='Main-h1'>Here is all what you need</h1>
            {/* <br /> */}
            <h3 className='Main-h3'>To manage your case</h3>
            <img src="images/pexels-ekaterina-bolovtsova-6077326.jpg" alt="" />
            <button className='started-button'>
                <Link to='sign-up' className='started-button-link'>
                    Get Started
                </Link>
            </button>
            {/* </div> */}

        </div>

    )
}

export default Main