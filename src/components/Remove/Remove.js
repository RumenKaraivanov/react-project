import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import { deleteOnebyId } from "../../services/api/car";

const Remove = ({
    onError
}) => {
    const { auth } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {

        (async () => {
            try {
                if (window.confirm('Are you sure you want to delete this asset!')) {
                    await deleteOnebyId(id, auth.accessToken);
                    navigate('/catalog', { replace: true });
                };
            } catch (err) {
                onError(err);
            }
        })();

    }, []);
    return (
        null
    );
};

export default Remove;