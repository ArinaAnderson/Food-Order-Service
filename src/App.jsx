import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Link to='/'>Menu</Link>
      <Link to='/cart'>Cart</Link>
    </>
    
  );
};

export default App;

/*
<div className="nav__logo-box">
  <img src="" className="nav__logo" />
  <span src="nav__logo-text">#VANLIFE</span>
</div>
*/
