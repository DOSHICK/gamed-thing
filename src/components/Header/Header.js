import React from 'react';

import {NavLink } from 'react-router-dom';

import endBtn from '../../img/Header/back-arrow.png';
import deckBtn from '../../img/Header/deck.png';
import mapBtn from '../../img/Header/map.png';
import "./Header.css";

function Header() {
  return (
    <header className="Header"> 
      <div className="Header__wrapper container">
        <NavLink to="/choose-person" title='Закончить забег' className="Header__end"><img src={endBtn} alt="" /></NavLink>
        {/* <div className="header__block">
          <NavLink to="/choose-person" title='Карта' className="Header__map"><img src={deckBtn} alt="" /></NavLink>
          <NavLink to="/choose-person" title='Колода' className="Header__deck"><img src={mapBtn} alt="" /></NavLink>
        </div> */}
      </div>
    </header>
  )
}

export default Header