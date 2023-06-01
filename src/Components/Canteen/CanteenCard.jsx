import React from "react";

import "./CanteenCard.css";

function CanteenCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
    </div>
  );
}

export default CanteenCard;
