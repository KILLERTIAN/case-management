import React from 'react';
import './Sign-Up.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <body className='body'>
            <div className="MainContainer">
                <div className="introTextContainer">
                    <h1>How do you want to use E-justice Portal? </h1>
                    <h3>I am a Citizen</h3>
                    <h3>I am a with the Court</h3>
                    <h4>Already a user ? <Link className='Loginlink'> Login </Link> here.</h4>
                </div>
                <div className="loginContainer">
                    <h2 className="welcometext">WELCOME</h2>
                    <input className='sign-up-input' type="email" placeholder='Enter your email' />
                    <input className='sign-up-input' type="password" placeholder='Enter your password' />
                    <button className="signup">Sign Up</button>
                    <h4 className="or">or Sign-Up with</h4>
                    <div className="divider"></div>
                    <div className="social">
                        <Link className="social-icons">
                            <img src="images/google-search.png" className="google" />
                            <h4>Sign Up with Google</h4>
                        </Link>
                        <Link className="social-icons">
                            <img src="images/twitter.png" alt="google" className="twitter" />
                            <h4>Sign Up with Twitter</h4>
                        </Link>
                        <Link className="social-icons">
                            <img src="images/apple-logo.png" alt="google" className="apple" />
                            <h4>Sign Up with Apple</h4>
                        </Link>
                    </div>
                </div>

            </div>
        </body>

    );
}


export default SignUp;