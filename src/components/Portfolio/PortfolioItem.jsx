/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import { useInView } from 'react-intersection-observer';
import BadgeUi from '../../assets/img/badge_ui.svg';
import BadgeCoding from '../../assets/img/badge_coding.svg';
import BadgeMotion from '../../assets/img/badge_motion.svg';
import BadgeAuthor from '../../assets/img/Badge_author.svg';

export default function PortfolioItem(props) {
  // Background image generation
  const backgroundStyle = {
    backgroundImage: `url(${require(`../../assets/img/${props.thumbs}`)})`,
  };

  // react-intersection-observer Configuration
  const { ref: cardOpening, inView: setcardOpening } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <a
      href={props.link}
      target="_blank"
      ref={cardOpening}
      className={setcardOpening ? 'card--opening ' : ''}
      rel="noreferrer"
    >
      <section className="portfolioItem" style={backgroundStyle}>
        <div className="portfolioItem__type">
          {props.type.UI && (
            <img
              className="portfolioItem__type__item"
              width="20px"
              src={BadgeUi}
              alt="img"
            />
          )}
          {props.type.coding && (
            <img
              className="portfolioItem__type__item"
              width="20px"
              src={BadgeCoding}
              alt="img"
            />
          )}
          {props.type.motion && (
            <img
              className="portfolioItem__type__item"
              width="20px"
              src={BadgeMotion}
              alt="img"
            />
          )}
        </div>

        <div className="portfolioItem__name">
          <p className="portfolioItem__name__item">{props.name}</p>
        </div>

        <div className="portfolioItem__author">
          <img
            src={BadgeAuthor}
            alt=""
            className="portfolioItem__author__sticker"
          />
          <p className="portfolioItem__author__name">{props.author}</p>
        </div>
      </section>
    </a>
  );
}
