import React from 'react';
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <main className="menu">
      <div className="center">
        <Link to='/'>Menu</Link>
        <Link to='/cart'>Cart</Link>
        <Outlet />
      </div>
    </main>
    
  );
};

export default Layout;

