import React from "react";
import "../style.css";

function Card(props) {
  return (
    <div className="card">
      <img className="profile-img" src={props.image} />
      <p className="name">{props.name}</p>
      <p className="text">Verified Buyer</p>
      <p className="review">"{props.review}"</p>
    </div>
  );
}

export default Card;
