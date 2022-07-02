import React from "react";
import loginImg from '../../assets/loginImg.jpg';
import './Login.css';

const Login = () => {
    return (
        <section className="login-section">
            <div className="login">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>login and enjoy the service</span>

                    <form id='form' className='flex flex-col' >
                        <input type="text" placeholder='username' />
                        <input type="password" placeholder='password' />
                        <button className='btn'>Login</button>
                    </form>

                </div>
                <div className="col-2">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;