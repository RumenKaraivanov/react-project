
import NavLoggedIn from "./NavLoggedIn";
import NavPublic from "./NavPublic";

function isAuth() {

    return false;
}

const Navbar = () => {
    return (
        <>

            {!isAuth() ? <NavLoggedIn /> : <NavPublic />}

        </>
    );
};
export default Navbar;