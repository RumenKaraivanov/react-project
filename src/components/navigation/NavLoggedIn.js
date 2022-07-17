import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";
import { logout } from '../../services/user';


const NavLoggedIn = ({
    user,
    onError
}) => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    async function handleLogout() {
        try {
            await logout(user.accessToken);
            setAuth({});
            navigate('/login', { replace: true });
        } catch (err) {
            onError(err)
        };
    };
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/catalog">Dashboard</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/create">Create</NavLink></li>
                <li><button onClick={handleLogout}>Logout as, {user.email}</button></li>
            </ul>
        </nav>
    );
};
export default NavLoggedIn;