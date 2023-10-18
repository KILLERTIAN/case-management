import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './New_case.css';

function New_case() {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        {
            fName: '', lName: '', Email: '', Number: '', Message: '',
        }
    )
    let name, value
    console.log(user)
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });

    };
    //Connect with firebase
    const submitData = async (e) => {
        e.preventDefault();

        if (!user.fName || !user.lName || !user.Email || !user.Number || !user.Message) {
            alert("Please fill out all fields.");
            return; // Prevent form submission
        }

        const {
            fName, lName, Email, Number, Message
        } = user;
        const res = await
            fetch("https://e-justice-portal-default-rtdb.firebaseio.com//userDataRecords.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fName, lName, Email, Number, Message
                })
            });
        if (res) {
            setUser({
                fName: '', lName: '', Email: '', Number: '', Message: '',
            })
            navigate('/thank-you');
        } else {
            alert("FILL all fields")
        };
    }

    return (
        // <div>New_case</div>
        <div className="newCaseContainer">
            <section className='userDetails'>
                <div className="input-form">
                    <div>
                        <label htmlFor="">Enter your First Name</label>

                        <input type="text" placeholder='Enter your First Name' name='fName' value={user.fName} required onChange={data} />
                    </div>
                    <div>
                        <label htmlFor="">Enter your Last Name</label>

                        <input type="text" placeholder='Enter your Last Name' name='lName' value={user.lName} required onChange={data} />
                    </div>

                    <div><label htmlFor="">Enter your E-mail</label>

                        <input type="email" placeholder='Enter your E-mail' name='Email' value={user.Email} required onChange={data} /></div>

                    <div><label htmlFor="">Enter your Phone Number</label>

                        <input type="number" placeholder='Enter your Phone Number' name='Number' value={user.Number} required onChange={data} /></div>

                    <div>
                        <label htmlFor="">Enter message
                        </label>

                        <input type="text" placeholder='Enter message' name='Message' value={user.Message} required onChange={data} /></div>



                    {/* <label htmlFor="">Select your Course</label>

                    <div className="select-course">
                        <input className='course-checkbox' type="radio" name='Course' value="Kids" checked={user.Course === "Kids"} onChange={data} />
                        <label htmlFor="">Kids <span>(3-10)</span></label>
                        <input className='course-checkbox' type="radio" name='Course' value="Teens" checked={user.Course === "Teens"} onChange={data} />
                        <label htmlFor="">Teens <span>(11-18)</span></label>
                        <input className='course-checkbox' type="radio" name='Course' value="Adults" checked={user.Course === "Adults"} onChange={data} />
                        <label htmlFor="">Adults <span>(19+)</span></label>
                    </div>
                    <label htmlFor="">Select your Timing</label>
                    <div className="select-timing">
                        <input className='course-checkbox' type="radio" name='Timing' value="Morning" checked={user.Timing === "Morning"} onChange={data} />
                        <label htmlFor="">Morning</label>
                        <input className='course-checkbox' type="radio" name='Timing' value="Afternoon" checked={user.Timing === "Afternoon"} onChange={data} />
                        <label htmlFor="">Afternoon</label>
                        <input className='course-checkbox' type="radio" name='Timing' value="Evening" checked={user.Timing === "Evening"} onChange={data} />
                        <label htmlFor="">Evening</label>
                    </div> */}

                    <button className="form-submit-button" onClick={submitData}>Enroll</button>
                </div>
            </section>
            <section className="caseDescription">

            </section>
            <section className="caseEvidence">

            </section>
        </div>

    )
}

export default New_case