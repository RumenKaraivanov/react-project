import NavLoggedIn from "./NavLoggedIn";
import NavPublic from "./NavPublic";
import './Navbar.css';

function isAuth() {

    return true;
}

const Navbar = () => {
    return (
        <>

            {!isAuth() ? <NavLoggedIn /> : <NavPublic />}

        </>
    );
};
export default Navbar;