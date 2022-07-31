import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const PrivateRoute = () => {
    const { auth } = useContext(AuthContext);

    if (!auth.accessToken) {
        return <Navigate to='/login' replace />;
    };

    return <Outlet />;

};

export default PrivateRoute;