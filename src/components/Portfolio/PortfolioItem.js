import React from "react";
import "./index.scss";
import BadgeUi from "../../assets/img/badge_ui.svg"
import BadgeCoding from "../../assets/img/badge_coding.svg"
import BadgeMotion from "../../assets/img/badge_motion.svg"


export default function PortfolioItem(props) {
  const backgroundStyle = {
    backgroundImage: `url(${require(`../../assets/img/${props.thumbs}`)})`,
  };

  return (
      <section className="portfolioItem" style={backgroundStyle}>
      <h2>{props.name}</h2>
      <div className="portfolioItem__type">
            {props.type.UI &&  <img width={"20px"} src={BadgeUi} alt="img"/>}
            {props.type.coding &&  <img width={"20px"} src={BadgeCoding} alt="img"/>}
            {props.type.motion &&  <img width={"20px"} src={BadgeMotion} alt="img"/>}
            

      </div>
       
        <div className="portfolioItem__author">
          <img src="" alt="" className="portfolioItem__author__sticker" />
          <p className="portfolioItem__author__name">{props.author}</p>
        </div>
      </section>

  );
}
