import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioButton from "./PortfolioButton";
import PortfolioItem from "./PortfolioItem";
import { setResetState } from "../../features/portfolio.slice";
import "./style.scss";

export default function Portfolio() {
  const statePortfolio = useSelector((state) => state.portfolio.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResetState());
  }, [dispatch]);

  return (
    <div className="portfolio">
      <div className="portfolio__header">
        <h1 className="portfolio__header__title"> ALL WORK </h1>
        <div className="portfolio__header__button">
          <PortfolioButton />
        </div>
      </div>
      <div className="portfolio__binder">
        {statePortfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
