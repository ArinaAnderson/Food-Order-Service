import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Menu from './pages/Menu/Menu.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Error from './pages/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '*',
    element: <Error />
  },
]);

const App = () => {
  const [allVans, setAllVans] = useState(null);
  const [currentVan, setCurrentVan] = useState(null);
  const [currentHostVans, setCurrentHostVans] = useState(null);

  return (
    <>
      <a href='/'>Menu</a>
      <a href='/cart'>Cart</a>
      <RouterProvider router={router} />
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
