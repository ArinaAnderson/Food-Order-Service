import React from 'react';
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <main className="menu">
      <div className="center">
        <Link to='/'>Menu</Link>
        <Link to='/cart'>Cart</Link>
        <h1 className="about-content__title title">Menu</h1>
      </div>
    </main>
    
  );
};

export default Menu;

