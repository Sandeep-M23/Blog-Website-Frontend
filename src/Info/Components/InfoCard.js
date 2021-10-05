import React from 'react';

import Card from '../../Shared/Components/UI-Elements/Card';
import './InfoCard.css';

const InfoCard = (props) => {
    return (
      <Card className="Info">
          <div className="Info__heading">
          <h1>TITLE</h1>
          </div>
        <div className="Info__image">
          <img
            src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Blog-Image"
          />
        </div>
        <div className="Info__description">
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
            <br/>
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
        </div>
      </Card>
    );
}

export default InfoCard;