import { Outlet } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import useRefreshToken from "../../hooks/useRefreshToken";

const PersistLogin = ({
    onError
}) => {

    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (err) {
                onError(err)
            } finally {
                setIsLoading(false)
            }
        };
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? <p>Loading..</p> : <Outlet />}
        </>
    );
};

export default PersistLogin;