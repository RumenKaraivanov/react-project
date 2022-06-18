import React from "react";

const NavLoggedIn = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catalog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout, user</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavLoggedIn;