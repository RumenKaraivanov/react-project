import NavLoggedIn from "./NavLoggedIn";
import NavPublic from "./NavPublic";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import './Navbar.css';

const Navbar = ({
    onError
}) => {
    const { auth } = useContext(AuthContext);
    return (
        <>
            {auth?.email ? <NavLoggedIn onError={onError} user={auth} /> : <NavPublic />}
        </>
    );
};
export default Navbar;