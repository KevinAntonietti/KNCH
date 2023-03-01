import React, { useState } from "react";
import "./style.scss";
import LOGO from "../../assets/img/logoKNCH.svg";
import { Link } from "react-scroll";

export default function Menu() {

  const [isOpen, setIsOpen]= useState(false)
  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <header className="nav-container">
      <nav className={isOpen ? "nav show-menu" : "nav"} >
        <img className="logo-img" src={LOGO} alt="" />

        <ul className={isOpen ? "menu show-menu" : "menu"}>
          <li className="menu__item"  onClick={handleOpenMenu}>
            <p className="menu__item__number">01.</p> <p> {"<home/>"} </p>
          </li>
            <Link
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
          <li className="menu__item" onClick={handleOpenMenu}>
              <p className="menu__item__number">02.</p> <p> {"<portfolio>"} </p>
          </li>
            </Link>
          <li className="menu__item"  onClick={handleOpenMenu}>
            <p className="menu__item__number">03.</p> <p> {"<skills>"} </p>
          </li>
          <li className="menu__item"  onClick={handleOpenMenu}>
            <p className="menu__item__number">04.</p> <p> {"<contact>"} </p>
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
