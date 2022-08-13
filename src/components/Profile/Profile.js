import './Profile.css';
import { useState, useContext, useEffect } from "react";
import { getLiked } from "../../services/api/car";
import ItemCard from "../ItemCard/ItemCard";
import AuthContext from "../../contexts/AuthContext";

const Profile = ({
    onError
}) => {

    const [cars, setCars] = useState([]);
    const { auth } = useContext(AuthContext);
    useEffect(() => {
        try {
            async function getAllCars() {
                const data = await getLiked(auth._id);
                setCars(data);
            }
            getAllCars();
        } catch (err) {
            onError(err)
        }

    }, []);
    return (
        <>
            <div className="card">
                <img className='imgUrl' src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="John" />
                <h1>{auth.email}</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
            </div>
            <div className="container-catalog">
                {cars.length !== 0
                    ?
                    <main className="grid">
                        {cars.map(car => <ItemCard key={car._id} car={car} />)}
                    </main>
                    :
                    <div className="no-data">
                        <h1>There are no data in database yet.</h1>
                    </div>
                }
            </div >
        </>
    );
};

export default Profile;