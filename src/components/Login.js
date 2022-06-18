import React from "react";

const Login = () => {
    return (
        <div className="full-screen-container" style={{ backgroundImage: 'url(background_image.jpg)' }}>
            <div className="form-container">
                <h3 className="form-title">Login</h3>
                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button type="submit" className="form-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;