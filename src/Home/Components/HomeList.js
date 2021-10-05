import React from 'react';
import HomeItem from './HomeItem';
import './HomeList.css'

const HomeList = () =>{
    return (
        <ul className="home-list__list">
          <HomeItem />
          <HomeItem />
          <HomeItem />
        </ul>
    );
}

export default HomeList;