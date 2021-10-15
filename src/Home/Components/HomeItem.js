import React from "react";
import Card from "../../Shared/Components/UI-Elements/Card";
import Button from "../../Shared/Components/Form-Elements/Button";

import "./HomeItem.css";

const HomeItem = (props) => {
  return (
    <li className="home-item">
      <Card className="home-item__content">
        <div className="home-item__image">
          <img
            src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Blog"
          />
        </div>
        <div className="home-item__info">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Button type="button" to="/Info">
            READ MORE
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default HomeItem;
