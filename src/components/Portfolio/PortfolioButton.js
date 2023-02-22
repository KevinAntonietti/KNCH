import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResetState, toggleFilterUI, toggleFilterMotion,toggleFilterCoding, toggleSearchFilter} from '../../features/portfolio.slice'

export default function PortfolioButton() {
  const dispatch = useDispatch()

  // Filtre des éléments en UI
  const toggleUi = () => {
    dispatch(setResetState())
    dispatch(toggleFilterUI())
  }

  // Filtre des éléments motion
  const toggleMotion = () => {
    dispatch(setResetState())
    dispatch(toggleFilterMotion())
  }

  // Filtre des éléments coding
  const toggleCoding = () => {
    dispatch(setResetState())
    dispatch(toggleFilterCoding())
  }



    // revenir au state initial
    const toggleALL = () => {
      dispatch(setResetState())
    }
    
    const handleSearchBar = (e) => {
      const value = e.target.value
      
      
      if(value===""){
        dispatch(setResetState())
      }

      else(dispatch(toggleSearchFilter(value)))
    }
    
  return (
    <div>
 
      <button onClick={toggleUi}>UI</button>
      <button onClick={toggleMotion}>Motion</button>
      <button onClick={toggleCoding}>Coding</button>
      <button onClick={toggleALL}>All</button>
      <input type="text" placeholder="Chercher" onChange={handleSearchBar} ></input>
      
    </div>
  )
}
