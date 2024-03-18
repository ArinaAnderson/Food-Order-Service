import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

import NavMenu from './layout/NavMenu.jsx';
import Main from './layout/Main.jsx';

import Menu from './pages/Menu/Menu.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Error from './pages/Error/Error.jsx';
import App from './App.jsx';
// import "../server";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ],
  },
  {
    path: '*',
    element: <Error />
  },
]);

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
