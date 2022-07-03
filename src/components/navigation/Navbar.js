import NavLoggedIn from "./NavLoggedIn";
import NavPublic from "./NavPublic";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";
import './Navbar.css';

const Navbar = () => {

    const user = useContext(LoginContext);
    return (
        <>

            {user.email ? <NavLoggedIn user={user} /> : <NavPublic />}

        </>
    );
};
export default Navbar;