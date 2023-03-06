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
          activeClass="activ"
          to="Menu"
          spy
          smooth
          duration={500}
          offset={-160}
          onSetActive={handleHomeSelect}
        >
          {/* logo elem */}
          <img
            onClick={handleHomeSelect}
            className="logo-img"
            src={LOGO}
            alt=""
          />
        </Link>

        <ul className={isOpenMenu ? 'show-menu menu' : 'menu'}>
          {/* Home Item menu - React Scroll elem */}
          <Link
            activeClass="activ"
            to="Menu"
            spy
            smooth
            duration={500}
            offset={-160}
          >
            {/* Home elem */}
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

          {/* Portfolio Item menu - React Scroll elem */}
          <Link
            activeClass="activ"
            to="Portfolio"
            spy
            smooth
            duration={500}
            offset={-160}
          >
            {/* Portfolio Elem elem */}
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

          {/* Portfolio Item menu - React Scroll elem */}
          <Link
            activeClass="activ"
            to="Contact"
            spy
            smooth
            duration={500}
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
        <button type="button" className="navbar-burger" onClick={handleOpenMenu}>
          <span className="navbar-burger__burger-bar" />
        </button>
      </nav>
    </header>
  );
}
