import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  homeSelect: true,
  portfolioSelect: false,
  constactSelect: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,

  reducers: {
    toggleOpenMenu: (state, action) => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    },

    toggleHomeSelect: (state, action) => {
      return {
        ...state,
        homeSelect: true,
        portfolioSelect: false,
        constactSelect: false,
      };
    },

    togglePortfolioSelect: (state, action) => {
      return {
        ...state,
        homeSelect: false,
        portfolioSelect: true,
        constactSelect: false,
      };
    },


    toggleConstactSelect: (state, action) => {
      return {
        ...state,
        homeSelect: false,
        portfolioSelect: false,
        constactSelect: true,
      };
    },
  },
});

export const {
  toggleOpenMenu,
  toggleHomeSelect,
  togglePortfolioSelect,
  toggleConstactSelect,
} = menuSlice.actions;
export default menuSlice.reducer;
