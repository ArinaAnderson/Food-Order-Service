import React from 'react';
import { Link } from "react-router-dom";
import Title from "../../components/Title.jsx";
import SearchField from "../../components/SearchField.jsx";

const Menu = () => {
  return (
    <main className="menu padding-x-l menu padding-x-r padding-y">
      <div className="menu__header">
        <Title>Menu</Title>
        <SearchField placeholder='Enter name of the dish' />
      </div>
    </main>
    
  );
};

export default Menu;

