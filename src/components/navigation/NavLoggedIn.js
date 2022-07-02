import React from "react";

const NavLoggedIn = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Dashboard</a></li>
                <li><a href="/catalog">Profile</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="/logout">Logout as, name</a></li>
            </ul>
        </nav>
    );
};
export default NavLoggedIn;