import React from "react";
import { Link } from "react-router-dom";
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
            alt="Blog-Image"
          />
        </div>
        <div className="home-item__info">
          <h1>TITLE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla velit nisl, id mattis purus ornare a. Proin imperdiet nibh
            libero, non pharetra enim facilisis id. Vestibulum scelerisque
            tempus augue et condimentum. Duis aliquet, nibh at feugiat placerat,
            quam orci efficitur lectus, ut posuere sem sem et lacus. Vestibulum
            aliquam malesuada mollis. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Integer
            egestas ultrices tellus, nec dapibus turpis egestas ut. Ut aliquam
            dolor eu ligula pharetra rhoncus sit amet mollis sapien.
          </p>
          <Button type="button" to="/Info">READ MORE</Button>
        </div>
      </Card>
    </li>
  );
};

export default HomeItem;
