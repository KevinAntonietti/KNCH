import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setResetState,
  toggleFilterUI,
  toggleFilterMotion,
  toggleFilterCoding,
  toggleFilterAll,
  setChangeSearch,
  toggleFilterSearch,
} from '../../features/portfolio.slice';

export default function PortfolioButton() {
  const dispatch = useDispatch();

  const UIActive = useSelector((state) => state.portfolio.isUIActive);
  const MotionActive = useSelector((state) => state.portfolio.isMotionActive);
  const CodingActive = useSelector((state) => state.portfolio.isCodingActive);
  const AllActive = useSelector((state) => state.portfolio.isAllActive);

  // Filtre des éléments en UI
  const toggleUi = () => {
    dispatch(setResetState());
    dispatch(toggleFilterUI());
  };

  // Filtre des éléments motion
  const toggleMotion = () => {
    dispatch(setResetState());
    dispatch(toggleFilterMotion());
  };

  // Filtre des éléments coding
  const toggleCoding = () => {
    dispatch(setResetState());
    dispatch(toggleFilterCoding());
  };

  // revenir au state initial
  const toggleALL = () => {
    dispatch(setResetState());
    dispatch(toggleFilterAll());
  };

  const handleChange = (e) => {
    // console.log('handleChange', e.target.value);
    dispatch(setResetState());
    dispatch(setChangeSearch(e.target.value));
    dispatch(toggleFilterSearch());
  };

  return (
    <div className="portfolio-button-menu">
      <button
        type="button"
        className={
          AllActive
            ? 'portfolio-button-item portfolio-button-item--active'
            : 'portfolio-button-item '
        }
        onClick={toggleALL}
      >
        All
      </button>
      <button
        type="button"
        className={
          UIActive
            ? 'portfolio-button-item portfolio-button-item--active'
            : 'portfolio-button-item '
        }
        onClick={toggleUi}
      >
        ui
      </button>
      <button
        type="button"
        className={
          MotionActive
            ? 'portfolio-button-item portfolio-button-item--active'
            : 'portfolio-button-item '
        }
        onClick={toggleMotion}
      >
        motion
      </button>
      <button
        type="button"
        className={
          CodingActive
            ? 'portfolio-button-item portfolio-button-item--active'
            : 'portfolio-button-item '
        }
        onClick={toggleCoding}
      >
        coding
      </button>
      <input
        type="search"
        className="portfolio-button-search"
        placeholder="Search a project..."
        onChange={handleChange}
      />
    </div>
  );
}
