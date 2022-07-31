import { useEffect, useState, useContext } from "react";
import { likeCar, getOneById } from "../../services/api/car";
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";

const Details = ({
    onError
}) => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [justLiked, setJustLiked] = useState(false);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        async function getCar() {
            const data = await getOneById(id);
            setCar(data);
            const liked = data.likes.find(likeId => likeId === auth._id);
            if (auth._id === data._ownerId) {
                setIsOwner(true);
            };
            if (liked) {
                setIsLiked(true);
            };
        };
        try {
            getCar();
        } catch (err) {
            onError(err);
        };
    }, [justLiked, id, onError, auth._id]);
    const onLike = async () => {
        await likeCar(car._id, auth.accessToken);
        setJustLiked(state => !state);
    };
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
                                {isLiked
                                    ? <p className="already-liked">You have already Liked this publication.</p>
                                    : <button onClick={onLike} className="like-model">Like</button>
                                }
                            </>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;