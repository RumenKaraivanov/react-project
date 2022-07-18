import { Link } from 'react-router-dom';

const NavPublic = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Dashboard</Link></li>
                <li><Link to="javascript:void(0)" className='disabled-link' >Welcome, Guest</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};
export default NavPublic;