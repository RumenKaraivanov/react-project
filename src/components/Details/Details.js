import { useEffect, useState, useContext } from "react";
import { getOneById } from "../../services/car";
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";

const Details = ({
    onError
}) => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const { auth } = useContext(AuthContext);
    useEffect(() => {
        try {
            async function getCar() {
                const data = await getOneById(id);
                setCar(data);
                if (auth._id === data._ownerId) {
                    setIsOwner(true);
                };
            };
            getCar();
        } catch (err) {
            onError(err);
        };
    }, []);
    return (
        <section id="deatils-page">
            <div className="container">
                <div className="car-img">
                    <img src={car.imageUrl} alt="" />
                </div>
                <div className="car-info">
                    <div className="car-text">
                        <div className="car-text">
                            <h1>Model: {car.model}</h1>
                            <h4>Price: {car.price}</h4>
                            <p>Description: {car.description} </p>
                            <p>Likes: {car?.likes?.length} </p>
                        </div>
                    </div>
                    <div className="car-btn">
                        {isOwner
                            ? <>
                                <Link to={`/edit/${car._id}`} className="edit">Edit</Link>
                                <Link to={`/delete/${car._id}`} className="remove">Delete</Link>
                            </>
                            : <>
                                <p className="already-liked">You have already Liked this publication.</p>
                                <Link to='/like' className="like-model">Like</Link>
                            </>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;