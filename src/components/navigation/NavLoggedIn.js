import { NavLink } from 'react-router-dom';


const NavLoggedIn = ({user}) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/catalog">Dashboard</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/create">Create</NavLink></li>
                <li><NavLink to="/logout">Logout as, {user.email}</NavLink></li>
            </ul>
        </nav>
    );
};
export default NavLoggedIn;