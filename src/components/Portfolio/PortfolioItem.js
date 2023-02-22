import React, { useState } from "react";
import "./index.scss";
import BadgeUi from "../../assets/img/badge_ui.svg"
import BadgeCoding from "../../assets/img/badge_coding.svg"
import BadgeMotion from "../../assets/img/badge_motion.svg"
import BadgeAuthor from "../../assets/img/Badge_author.svg"


export default function PortfolioItem(props) {
  const backgroundStyle = {
    backgroundImage: `url(${require(`../../assets/img/${props.thumbs}`)})`,
  };



  return (
    <a href={props.link}>
 
      <section className="portfolioItem" style={backgroundStyle}>

     
      <div className="portfolioItem__type">
            {props.type.UI &&  <img className="portfolioItem__type__item" width={"20px"} src={BadgeUi} alt="img"/>}
            {props.type.coding &&  <img className="portfolioItem__type__item"  width={"20px"} src={BadgeCoding} alt="img"/>}
            {props.type.motion &&  <img className="portfolioItem__type__item"  width={"20px"} src={BadgeMotion} alt="img"/>}
            
      </div>
    
      {/* {isHover &&  */}
      <div className="portfolioItem__name" >
      <p className="portfolioItem__name__item">{props.name}</p>
      </div>
      {/* } */}

        <div className="portfolioItem__author">
          <img  src={BadgeAuthor} alt="" className="portfolioItem__author__sticker" />
          <p className="portfolioItem__author__name">{props.author}</p>
        </div>
      </section>
      </a>
  );
}
