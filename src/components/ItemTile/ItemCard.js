import React from "react";
import { NavLink } from 'react-router-dom';

const ItemCard = () => {
    return (
      <article>
        <img src="" alt=""/>
        <div className="text">
            <h3>Title: </h3>
            <p>Description: </p>
            <NavLink className='details-btn' to='/details'>Details</NavLink>
        </div>
      </article>
    );
};

export default ItemCard;