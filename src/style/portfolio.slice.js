import { createSlice } from "@reduxjs/toolkit";
import DATA from "../data/portfolio.json";

const initialState = {
  items: [],
  isUIActive: false,
  isMotionActive: false,
  isCodingActive: false,
  isAllActive: true,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,

  reducers: {
    // Rechargement du state à sa valeur initial
    setResetState: (state, action) => {
      state.items = DATA;
    },

    toggleFilterAll: (state, action) => {
      return {
        ...state,
        isUIActive: false,
        isMotionActive: false,
        isCodingActive: false,
        isAllActive: true,
      };
    },

    // Filtre des éléments du portfolio ayant le tag UI
    toggleFilterUI: (state, action) => {
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
    toggleFilterMotion: (state, action) => {
      const filterState = state.items.filter(
        (item) => item.type.motion === true
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
    toggleFilterCoding: (state, action) => {
      const filterState = state.items.filter(
        (item) => item.type.coding === true
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
  },
});

export const {
  setResetState,
  toggleFilterUI,
  toggleFilterMotion,
  toggleFilterCoding,
  toggleFilterAll,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
