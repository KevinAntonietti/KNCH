import React from 'react'
import { useDispatch } from 'react-redux'
import { getPortfolioItems, setResetState, toggleFilter} from '../../features/portfolio.slice'
// import DATA from "../../data/portfolio.json"

export default function PortfolioButton() {
  const dispatch = useDispatch()

  // Filtre des éléments en UI
  const toggleUi = () => {
    dispatch(setResetState())
    dispatch(toggleFilter("UI")) }

  // Filtre des élément motion
  const toggleMotion = () => {
    // dispatch(getPortfolioItems())
    dispatch(toggleFilter("motion")) }

    // revenir au state initial
    const toggleALL = () => {
      dispatch(getPortfolioItems())
    }
    
    // const handleSearchBar = (e) => {
    //   const value = e.target.value
    //   console.log(value);
      
    //   if(value===""){
    //     dispatch(setPortfolioData(DATA))
    //   }
    // }
    
  return (
    <div>
 
      <button onClick={toggleUi}>UI</button>
      <button onClick={toggleMotion}>Motion</button>
      <button onClick={toggleALL}>All</button>
      <input type="text" placeholder="Chercher" ></input>
      
    </div>
  )
}
