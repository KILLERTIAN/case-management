import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">

                    <Link to='/' className='Navbar-logo'>E-Justice Portal</Link>
                    <ul className="nav-items">
                        <li className='nav-menu'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-menu'>
                            <Link to='/cases' className='nav-links'>
                                Cases
                            </Link>
                        </li>
                        {/* <li className='nav-menu' >
                            <Link to='/staff-section' className='nav-links'>
                                Staff section
                            </Link>
                        </li> */}
                        <li className='nav-menu'>
                            <Link to='/legal-database' className='nav-links'>
                                Legal Database
                            </Link>
                        </li>
                        <li className='nav-menu'>
                            <Link to='/support' className='nav-links'>
                                Support
                            </Link>
                        </li>
                        <button className='nav-button'>
                            <Link to='/sign-up' className='sign-up-link'>
                                Sign Up
                            </Link>
                        </button>
                    </ul>

                </div>
            </nav>
        </>
    );




}

export default Navbar;