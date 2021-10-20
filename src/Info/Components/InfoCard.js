import React from "react";

import Card from "../../Shared/Components/UI-Elements/Card";
import "./InfoCard.css";

const InfoCard = (props) => {
  return (
    <Card className="Info">
      <div className="Info__heading">
        <h1>{props.title}</h1>
      </div>
      <div className="Info__image">
        <img
          src={`http://localhost:5000/${props.image}`}
          alt={props.title}
        />
      </div>
      <div className="Info__description">
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default InfoCard;
