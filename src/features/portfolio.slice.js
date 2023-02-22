import { createSlice } from "@reduxjs/toolkit";
import DATA from "../data/portfolio.json";

const initialState = {
  items: [],
  loading: false,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    // Rechargement du state à sa valeur initial
    setResetState: (state, action) => {
      state.items = DATA;
    },

    // Filtre des éléments du portfolio ayant le tag UI
    toggleFilterUI: (state, action) => {
      const filterState = state.items.filter((item) => item.type.UI === true);
      return { ...state, items: filterState };
    },

    // Filtre des éléments du portfolio ayant le tag motion
    toggleFilterMotion: (state, action) => {
      const filterState = state.items.filter(
        (item) => item.type.motion === true
      );
      return { ...state, items: filterState };
    },

    // Filtre des éléments du portfolio ayant le tag coding
    toggleFilterCoding: (state, action) => {
      const filterState = state.items.filter(
        (item) => item.type.coding === true
      );
      return { ...state, items: filterState };
    },

    toggleSearchFilter: (state, action) => {
      const filterSearch = state.items.filter(
        (item) =>
          item.name.toLowerCase().includes(action.payload) ||
          item.type.toLowerCase().includes(action.payload)
      );

      return { ...state, items: filterSearch };
    },
  },
});

export const {
  setResetState,
  toggleFilterUI,
  toggleFilterMotion,
  toggleFilterCoding,
  toggleSearchFilter,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
