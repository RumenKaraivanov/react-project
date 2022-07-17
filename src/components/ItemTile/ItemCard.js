import React from "react";
import { NavLink } from 'react-router-dom';

const ItemCard = ({
  car
}) => {
  return (
    <article>
      <img src={car.imageUrl} alt="" />
      <div className="text">
        <h3>Model: {car.model}</h3>
        <p>Description: {car.description} </p>
        <NavLink className='details-btn' to={`/details/${car._id}`}>Details</NavLink>
      </div>
    </article>
  );
};

export default ItemCard;