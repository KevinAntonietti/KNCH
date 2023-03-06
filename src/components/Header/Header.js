import React from "react";
import { Link } from "react-scroll";
import "./style.scss";
import HEADERVIDEO from "../../assets/video/header.mp4";
import ARROWNEXT from "../../assets/img/arrow-next.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={HEADERVIDEO} type="video/mp4" />
        </video>
      </div>
      <div className="headerElem">
        <div className="headerElem__title">
          <h1>KNCH</h1>
          <p>studio</p>
        </div>
        <div className="headerElem__next">
        <Link
              activeClass="activ"
              to="Portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-160}
            >
          <img src={ARROWNEXT} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
