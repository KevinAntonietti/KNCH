import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioButton from "../PortfolioButton/PortfolioButton";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { setResetState } from "../../features/portfolio.slice";

export default function Portfolio() {
  const statePortfolio = useSelector((state) => state.portfolio.items);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setResetState())
  },[dispatch])

  console.log(statePortfolio);

  return (
    <div>
      <PortfolioButton />
      <div className='portfolio'>
 
      {statePortfolio.map((item) => {
        return <PortfolioItem key={item.id} {...item} />;
      })}
      </div>
    </div>
  );
}
