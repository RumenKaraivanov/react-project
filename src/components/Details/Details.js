import React from "react";
import './Details.css';
import loginImg from '../../assets/loginImg.jpg';

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

                        <button href="/edit/{{house._id}}" className="edit">Edit</button>
                        <button href="/edit/{{house._id}}/delete" className="remove">Delete</button>

                        <p className="already-liked">You have already Liked this publication.</p>

                        <button href="like-model" className="like-model">Like</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;