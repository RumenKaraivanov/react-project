import React from "react";

const Register = () => {
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="form-container">
                <h3 className="form-title">Register</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="repeat-password">Repeat Password</label>
                        <input id="repeat-password" type="password" />
                    </div>
                    <button type="submit" className="form-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;