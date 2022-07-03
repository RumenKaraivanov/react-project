import React from "react";
import bgImg from '../../assets/img.jpg';
import './Register.css';


const Register = () => {
    return (
        <section className="register-section">
            <div className="register">
                <div className="col-1">
                    <h2>Sign Up</h2>
                    <span>register and enjoy the service</span>

                    <form className='form flex flex-col' >
                        <input type="text" placeholder='email' />
                        <input type="password" placeholder='password' />
                        <input type="password" placeholder='confirm password' />
                        <button className='btn'>Register</button>
                    </form>

                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Register;