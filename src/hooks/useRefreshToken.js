import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useRefreshToken = () => {
    const { setAuth } = useContext(AuthContext);
    const refresh = async () => {
        const response = await fetch('http://localhost:3030/refresh', {
            method: 'POST',
            credentials: 'include'
        });
        const data = await response.json();
        setAuth(data);
        return data;
    }
    return refresh;
}
export default useRefreshToken;