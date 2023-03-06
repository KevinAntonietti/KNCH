import React from "react";
import "./style.scss";
import LOGO from "../../assets/img/logoKNCH.svg";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleOpenMenu,
  toggleHomeSelect,
  togglePortfolioSelect,
  toggleConstactSelect,
} from "../../features/menu.slice";

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
  const homeSelect = useSelector((item) => {
    return item.menu.homeSelect;
  });

  // Portfolio toggle and state
  const handlePortfolioSelect = () => {
    if (window.innerWidth <= 650) {
      dispatch(toggleOpenMenu());
      dispatch(togglePortfolioSelect());
    } else {
      dispatch(togglePortfolioSelect());
    }
  };
  const portfolioSelect = useSelector((item) => {
    return item.menu.portfolioSelect;
  });

  // Contact  toggle and state
  const handleContactSelect = () => {
    if (window.innerWidth <= 650) {
      dispatch(toggleOpenMenu());
      dispatch(toggleConstactSelect());
    } else {
      dispatch(toggleConstactSelect());
    }
  };

  const contactSelect = useSelector((item) => {
    return item.menu.constactSelect;
  });

  // State Burger Menu
  const isOpenMenu = useSelector((state) => state.menu.isOpen);

  // Toggle On/OFF Burger Menu
  const handleOpenMenu = () => {
    dispatch(toggleOpenMenu());
  };

  return (
    <>
      <header className="nav-container">
        {/* Logo Item menu */}
        <nav className={isOpenMenu ? "nav show-menu" : "nav"}>
          {/* logo Item menu - React Scroll elem */}
          <Link
            activeClass="activ"
            to="Menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
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

          <ul className={isOpenMenu ? "show-menu menu" : "menu"}>
            {/* Home Item menu - React Scroll elem */}
            <Link
              activeClass="activ"
              to="Menu"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              {/* Home elem */}
              <li
                className={
                  homeSelect ? "menu__item menu--active" : "menu__item"
                }
                onClick={handleHomeSelect}
              >
                <p className="menu__item__number">01.</p>{" "}
                <p> {homeSelect ? "<home />" : "<home>"} </p>
              </li>
            </Link>

            {/* Home Item menu - React Scroll elem */}
            <Link
              activeClass="activ"
              to="Portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-160}
            >
              {/* Portfolio Elem elem */}
              <li
                className={
                  portfolioSelect ? "menu__item menu--active" : "menu__item"
                }
                onClick={handlePortfolioSelect}
              >
                <p className="menu__item__number">02.</p>
                <p> {portfolioSelect ? "<portfolio />" : "<portfolio>"} </p>
              </li>
            </Link>

            <li
              className={
                contactSelect ? "menu__item menu--active" : "menu__item"
              }
              onClick={handleContactSelect}
            >
              <p className="menu__item__number">03.</p>{" "}
              <p> {contactSelect ? "<contact />" : "<contact>"} </p>
            </li>
          </ul>
          <button className="navbar-burger" onClick={handleOpenMenu}>
            <span className="navbar-burger__burger-bar"></span>
          </button>
        </nav>
      </header>
    </>
  );
}
