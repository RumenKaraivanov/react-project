import React from "react";

const Register = () => {
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="register-container">
                <h3 className="register-title">Create Account</h3>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="input-group">
                        <label>Repeat Password</label>
                        <input type="password" />
                    </div>
                    <button type="submit" className="register-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;