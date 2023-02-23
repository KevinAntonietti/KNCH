import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResetState, toggleFilterUI, toggleFilterMotion,toggleFilterCoding,toggleFilterAll} from '../../features/portfolio.slice'

export default function PortfolioButton() {
  const dispatch = useDispatch()

  const UIActive = useSelector((state)=> state.portfolio.isUIActive)
  const MotionActive = useSelector((state)=> state.portfolio.isMotionActive)
  const CodingActive = useSelector((state)=> state.portfolio.isCodingActive)
  const AllActive = useSelector((state)=> state.portfolio.isAllActive)


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
      dispatch(toggleFilterAll())
    }
    


  return (
    <div>
 
      <button className={UIActive ? "portfolio-button portfolio-button--active": "portfolio-button" }  onClick={toggleUi}>ui</button>
      <button className={MotionActive ? "portfolio-button portfolio-button--active": "portfolio-button" } onClick={toggleMotion}>motion</button>
      <button className={CodingActive ? "portfolio-button portfolio-button--active": "portfolio-button" } onClick={toggleCoding}>coding</button>
      <button className={AllActive ? "portfolio-button portfolio-button--active": "portfolio-button" } onClick={toggleALL}>All</button>
      
    </div>
  )
}
