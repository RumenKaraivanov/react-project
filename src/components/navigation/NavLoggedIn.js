import { Link } from 'react-router-dom';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";
import { logout } from '../../services/api/user';


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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><button onClick={handleLogout}>Logout as, {user.email}</button></li>
            </ul>
        </nav>
    );
};
export default NavLoggedIn;