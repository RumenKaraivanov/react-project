import React, { useContext, useEffect, useState } from "react";
import loginImg from '../../assets/loginImg.jpg';
import './Login.css';

const Login = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         const response = await fetch('http://localhost:3030/users/login',
    //             {
    //                 method: 'POST',
    //                 headers: { 'Content-Type': 'apllication/json' }
    //             });
    //         const result = await response.json();
    //         console.log(result)
    //     };
    //     makeRequest()

    // }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email')?.trim();
        const password = formData.get('password')?.trim();
        console.log(email)
        console.log(password)
       
        const response = await fetch('http://localhost:3030/users/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
        const result = await response.json();
        console.log(result)
    };

    return (
        <section className="login-section">
            <div className="login">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>login and enjoy the service</span>

                    <form onSubmit={onSubmit} className='form flex flex-col' >
                        <input type="text" name="email" placeholder='email' />
                        <input type="password" name="password" placeholder='password' />
                        <button type="submit" className='btn'>Login</button>
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