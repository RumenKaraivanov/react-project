import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <div class="collapse navbar-collapse">

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Create</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Welcome, user</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar