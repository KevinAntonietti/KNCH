/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './style.scss';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import LOGO from '../../assets/img/logoKNCH.svg';
import {
  toggleOpenMenu,
  toggleHomeSelect,
  togglePortfolioSelect,
  toggleConstactSelect,
} from '../../features/menu.slice';

export default function Menu() {
  const dispatch = useDispatch();

  // Home toggle and state
  const handleHomeSelect = () => {
    if (window.innerWidth <= 650) {
      dispatch(toggleOpenMenu());
      dispatch(toggleHomeSelect());
    } else {
      dispatch(toggleHomeSelect());
    }
  };

  const handleScrollHomeSelect = () => {
    dispatch(toggleHomeSelect());
  };
  const homeSelect = useSelector((item) => item.menu.homeSelect);
  // Portfolio toggle and state
  const handlePortfolioSelect = () => {
    if (window.innerWidth <= 650) {
      dispatch(toggleOpenMenu());
      dispatch(togglePortfolioSelect());
    } else {
      dispatch(togglePortfolioSelect());
    }
  };

  const handleScrollPortfolioSelect = () => {
    dispatch(togglePortfolioSelect());
  };
  const portfolioSelect = useSelector((item) => item.menu.portfolioSelect);

  // Contact  toggle and state
  const handleContactSelect = () => {
    if (window.innerWidth <= 650) {
      dispatch(toggleOpenMenu());
      dispatch(toggleConstactSelect());
    } else {
      dispatch(toggleConstactSelect());
    }
  };
  const handleScrollContactSelect = () => {
    dispatch(toggleConstactSelect());
  };
  const contactSelect = useSelector((item) => item.menu.constactSelect);

  // State Burger Menu
  const isOpenMenu = useSelector((state) => state.menu.isOpen);

  // Toggle On/OFF Burger Menu
  const handleOpenMenu = () => {
    dispatch(toggleOpenMenu());
  };

  return (
    <header className="nav-container">
      {/* Logo Item menu */}
      <nav className={isOpenMenu ? 'nav show-menu' : 'nav'}>
        {/* logo Item menu - React Scroll elem */}
        <Link
          to="Header"
          smooth
          duration={500}
          offset={-160}
        >
          {/* logo elem */}
          <img
            onClick={handleScrollHomeSelect}
            className="logo-img"
            src={LOGO}
            alt=""
          />
        </Link>

        <ul className={isOpenMenu ? 'show-menu menu' : 'menu'}>

          {/* Home elem */}
          <Link
            activeClass="menu__item menu--active"
            to="Header"
            onSetActive={handleScrollHomeSelect}
            spy
            smooth
            duration={500}
            offset={-160}
          >
            <li
              className={
                  homeSelect ? 'menu__item menu--active' : 'menu__item'
                }
              onClick={handleHomeSelect}
            >
              <p className="menu__item__number">01.</p>
              <p>
                {homeSelect ? '<home />' : '<home>'}
              </p>
            </li>
          </Link>

          {/* Portfolio Elem elem */}
          <Link
            activeClass="menu__item menu--active"
            to="Portfolio"
            onSetActive={handleScrollPortfolioSelect}
            spy
            smooth
            duration={500}
            offset={-160}
          >
            <li
              className={
                  portfolioSelect ? 'menu__item menu--active' : 'menu__item'
                }
              onClick={handlePortfolioSelect}
            >

              <p className="menu__item__number">02.</p>
              <p>
                {portfolioSelect ? '<portfolio />' : '<portfolio>'}
              </p>
            </li>
          </Link>

          {/* Contact Elem elem */}
          <Link
            activeClass="menu__item menu--active"
            onSetActive={handleScrollContactSelect}
            to="Contact"
            spy
            smooth
            duration={900}
          >
            <li
              className={
                contactSelect ? 'menu__item menu--active' : 'menu__item'
              }
              onClick={handleContactSelect}
            >
              <p className="menu__item__number">03.</p>
              <p>
                {contactSelect ? '<contact />' : '<contact>'}
              </p>
            </li>
          </Link>
        </ul>

        {/* Burger Menu button */}
        <button type="button" className="navbar-burger" onClick={handleOpenMenu}>
          <span className="navbar-burger__burger-bar" />
        </button>
      </nav>
    </header>
  );
}
