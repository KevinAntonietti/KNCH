/* eslint-disable react/jsx-props-no-spreading */
import { React, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioButton from './PortfolioButton';
import PortfolioItem from './PortfolioItem';
import { setResetState } from '../../features/portfolio.slice';
import './style.scss';

export default function Portfolio() {
  const statePortfolio = useSelector((state) => state.portfolio.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResetState());
  }, [dispatch]);

  // react-intersection-observer Configuration
  const { ref: PortfolioHeader, inView: setPortfolioHeader } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="portfolio">
      <div className={setPortfolioHeader ? 'portfolio__header portfolioHeader--opening' : 'portfolio__header'} ref={PortfolioHeader}>
        <h1 className="portfolio__header__title"> ALL WORK </h1>
        <div className="portfolio__header__button">
          <PortfolioButton />
        </div>
      </div>
      <div className="portfolio__binder">
        {statePortfolio.map((item) => <PortfolioItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
