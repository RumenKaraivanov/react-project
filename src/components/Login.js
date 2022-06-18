import React from "react";

const Login = () => {
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="login-container">
                <h3 className="login-title">Welcome</h3>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;