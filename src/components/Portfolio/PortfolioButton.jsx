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

  // Filtering of elements in IU
  const toggleUi = () => {
    dispatch(setResetState());
    dispatch(toggleFilterUI());
  };

  // Filtering of motion elements
  const toggleMotion = () => {
    dispatch(setResetState());
    dispatch(toggleFilterMotion());
  };

  // Filtering of coding elements
  const toggleCoding = () => {
    dispatch(setResetState());
    dispatch(toggleFilterCoding());
  };

  // return to the initial state
  const toggleALL = () => {
    dispatch(setResetState());
    dispatch(toggleFilterAll());
  };

  //  search function
  const handleChange = (e) => {
    dispatch(setResetState());
    dispatch(setChangeSearch(e.target.value));
    dispatch(toggleFilterSearch());
  };

  return (
    <div className="portfolio-button-menu">
      <div className="portfolio-button-menu__click">

        <button
          type="button"
          className={
          AllActive
            ? 'portfolio-button-menu__click__item portfolio-button-menu__click__item--active'
            : 'portfolio-button-menu__click__item '
        }
          onClick={toggleALL}
        >
          All
        </button>
        <button
          type="button"
          className={
          UIActive
            ? 'portfolio-button-menu__click__item portfolio-button-menu__click__item--active'
            : 'portfolio-button-menu__click__item '
        }
          onClick={toggleUi}
        >
          ui
        </button>
        <button
          type="button"
          className={
          MotionActive
            ? 'portfolio-button-menu__click__item portfolio-button-menu__click__item--active'
            : 'portfolio-button-menu__click__item '
        }
          onClick={toggleMotion}
        >
          motion
        </button>
        <button
          type="button"
          className={
          CodingActive
            ? 'portfolio-button-menu__click__item portfolio-button-menu__click__item--active'
            : 'portfolio-button-menu__click__item '
        }
          onClick={toggleCoding}
        >
          coding
        </button>
      </div>

      <input
        type="search"
        className="portfolio-button-menu__search"
        placeholder="Search a project..."
        onChange={handleChange}
      />
    </div>
  );
}
