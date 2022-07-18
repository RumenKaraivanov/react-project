import React, { useState, useContext } from "react";
import loginImg from '../../assets/loginImg.jpg';
import './Login.css';
import { login } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";


const Login = ({
    onError
}) => {
    const { setAuth } = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email')?.trim();
        const password = formData.get('password')?.trim();

        try {
            const result = await login(email, password);
            setAuth(result);
            setIsDisabled(true);
            navigate('/catalog', { replace: true });

        } catch (err) {
            onError(err);
        }
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
                        <button type="submit" className='btn' disabled={isDisabled}>Login</button>
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