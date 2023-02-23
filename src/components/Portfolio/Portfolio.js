import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioButton from "./PortfolioButton";
import PortfolioItem from "./PortfolioItem";
import { setResetState } from "../../features/portfolio.slice";
import "./style.scss"

export default function Portfolio() {
  const statePortfolio = useSelector((state) => state.portfolio.items);
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setResetState())
  },[dispatch])

  console.log(statePortfolio);

  return (
    <div className='portfolio'>
      <PortfolioButton />
      <div className="portfolio__binder">
      {statePortfolio.map((item) => {
        return <PortfolioItem key={item.id} {...item} />;
      })}
      </div>                                                              
    </div>
  );
}
