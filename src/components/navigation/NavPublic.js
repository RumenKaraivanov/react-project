import { NavLink } from 'react-router-dom';

const NavPublic = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/catalog">Dashboard</NavLink></li>
                <li><NavLink to="javascript:void(0)" className='disabled-link' >Welcome, Guest</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
        </nav>
    );
};
export default NavPublic;