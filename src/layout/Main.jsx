import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import userImg from '../../assets/images/user-photo.jpg';
import styles from './Layout.module.css';

const Main = () => {
  const navListItemBaseClasses = "sidebar__nav-list__link";

  return (
    <div className={styles["main-content"]}>
      <section className="sidebar padding-y padding-x-l padding-x-r">
        <section className="personal-info">
          <div className="personal-info__profile-img-box">
            <img src="/black-witch-cat.png" alt="" width="" height="" />
          </div>
          <p className="personal-info__name">Антон Ларичев</p>
          <p className="personal-info__email">antonlaricode@ya.ru</p>
        </section>
        <div className={styles["sidebar__nav"]}>
          <ul className="sidebar__nav-list">
            <li className="sidebar__nav-list__item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? `${navListItemBaseClasses} sidebar__nav-list__link--active` : navListItemBaseClasses}
              >
                Menu
              </NavLink>
            </li>
            <li className="sidebar__nav-list__item">
              <NavLink 
                className={({ isActive }) => isActive ? `${navListItemBaseClasses} sidebar__nav-list__link--active` : navListItemBaseClasses}
                to="cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <Link className="btn logout-btn link-button">Logout</Link>
        </div>
      </section>
      <Outlet className="main-elem" />
    </div>
    
    
  );
};

export default Main;

// <div className="padding-y padding-x-l padding-x-r">
// "sidebar padding-y padding-x-l padding-x-r"
