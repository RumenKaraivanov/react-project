import React from "react";
import './Details.css';
import loginImg from '../../assets/loginImg.jpg';
import { NavLink } from 'react-router-dom';

const Details = () => {
    return (
        <section id="deatils-page">
            <div className="container">
                <div className="car-img">
                    <img src={loginImg} />
                </div>
                <div className="car-info">
                    <div className="car-text">
                        <div className="car-text">
                            <h1>Name: </h1>
                            <h2>Type: </h2>
                            <h4>Year: </h4>
                            <h4>City: </h4>
                            <p>Description: </p>

                        </div>
                    </div>


                    <div className="car-btn">

                        <NavLink to="/edit" className="edit">Edit</NavLink>
                        <NavLink to="/delete" className="remove">Delete</NavLink>

                        <p className="already-liked">You have already Liked this publication.</p>

                        <NavLink to='/like' className="like-model">Like</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;