import React from "react";
import Card from "../../Shared/Components/UI-Elements/Card";
import Button from "../../Shared/Components/Form-Elements/Button";

import "./HomeItem.css";

const HomeItem = (props) => {
  return (
    <li className="home-item">
      <Card className="home-item__content">
        <div className="home-item__image">
          <img src={`http://localhost:5000/${props.image}`} alt="Blog" />
        </div>
        <div className="home-item__info">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Button plain type="button" to={`Info/${props.id}`}>
            READ MORE
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default HomeItem;
