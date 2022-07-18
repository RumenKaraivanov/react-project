import { useEffect, useState } from "react";
import { getOneById } from "../../services/car";
import './Details.css';
import { NavLink, useParams } from 'react-router-dom';

const Details = ({
    onError
}) => {

    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        try {
            async function getCar() {
                const data = await getOneById(id);
                setCar(data);
            }
            getCar();
        } catch (err) {
            onError(err)
        }

    }, [car, id]);
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
                        <NavLink to={`/edit/${car._id}`} className="edit">Edit</NavLink>
                        <NavLink to={`/delete/${car._id}`} className="remove">Delete</NavLink>
                        <p className="already-liked">You have already Liked this publication.</p>
                        <NavLink to='/like' className="like-model">Like</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;