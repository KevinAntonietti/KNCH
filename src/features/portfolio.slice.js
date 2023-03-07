/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import DATA from '../data/portfolio.json';

const initialState = {
  items: [],
  isUIActive: false,
  isMotionActive: false,
  isCodingActive: false,
  isAllActive: true,
  newSearch: '',
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,

  reducers: {
    // Rechargement du state à sa valeur initial
    setResetState: (state) => {
      state.items = DATA;
    },

    toggleFilterAll: (state) => ({
      ...state,
      isUIActive: false,
      isMotionActive: false,
      isCodingActive: false,
      isAllActive: true,
    }),

    // Filtre des éléments du portfolio ayant le tag UI
    toggleFilterUI: (state) => {
      const filterState = state.items.filter((item) => item.type.UI === true);
      return {
        ...state,
        items: filterState,
        isUIActive: true,
        isMotionActive: false,
        isCodingActive: false,
        isAllActive: false,
      };
    },

    // Filtre des éléments du portfolio ayant le tag motion
    toggleFilterMotion: (state) => {
      const filterState = state.items.filter(
        (item) => item.type.motion === true,
      );
      return {
        ...state,
        items: filterState,
        isUIActive: false,
        isMotionActive: true,
        isCodingActive: false,
        isAllActive: false,
      };
    },

    // Filtre des éléments du portfolio ayant le tag coding
    toggleFilterCoding: (state) => {
      const filterState = state.items.filter(
        (item) => item.type.coding === true,
      );
      return {
        ...state,
        items: filterState,
        isUIActive: false,
        isMotionActive: false,
        isCodingActive: true,
        isAllActive: false,
      };
    },

    setChangeSearch: (state, action) => ({
      ...state,
      newSearch: action.payload,
    }),

    toggleFilterSearch: (state) => {
      const filterState = state.items.filter((item) => (
        item.name.toLowerCase().includes(state.newSearch.toLowerCase())
      ));
      return {
        ...state,
        items: filterState,
      };
    },
  },

});

export const {
  setResetState,
  toggleFilterUI,
  toggleFilterMotion,
  toggleFilterCoding,
  toggleFilterAll,
  setChangeSearch,
  toggleFilterSearch,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
