import { useState, useContext } from "react";
import bgImg from '../../assets/img.jpg';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";
import { register } from "../../services/api/user";

const Register = ({
    onError
}
) => {
    const { setAuth } = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email')?.trim();
        const password = formData.get('password')?.trim();
        const confirmPassword = formData.get('confirm-password')?.trim();

        try {
            if(!(/[a-zA_Z-]+@[a-zA_Z-]+\.[a-zA_Z-]+/).test(email)){
                throw new Error('Email must be in email format.');
            };

            if (password !== confirmPassword) {
                throw new Error('Passwords doesnt match!');
            };
            const result = await register(email, password);
            setAuth(result);
            setIsDisabled(true);
            navigate('/catalog', { replace: true });
        } catch (err) {
            onError(err);
        }
    };
    return (
        <section className="register-section">
            <div className="register">
                <div className="col-1">
                    <h2>Sign Up</h2>
                    <span>register and enjoy the service</span>

                    <form onSubmit={onSubmit} className='form flex flex-col' >
                        <input type="text" placeholder='email' name="email" />
                        <input type="password" placeholder='password' name="password" />
                        <input type="password" placeholder='confirm password' name="confirm-password" />
                        <button className='btn' disabled={isDisabled} >Register</button>
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