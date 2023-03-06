import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  homeSelect: true,
  portfolioSelect: false,
  constactSelect: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,

  reducers: {
    toggleOpenMenu: (state) => ({
      ...state,
      isOpen: !state.isOpen,
    }),

    toggleHomeSelect: (state) => ({
      ...state,
      homeSelect: true,
      portfolioSelect: false,
      constactSelect: false,
    }),

    togglePortfolioSelect: (state) => ({
      ...state,
      homeSelect: false,
      portfolioSelect: true,
      constactSelect: false,
    }),

    toggleConstactSelect: (state) => ({
      ...state,
      homeSelect: false,
      portfolioSelect: false,
      constactSelect: true,
    }),
  },
});

export const {
  toggleOpenMenu,
  toggleHomeSelect,
  togglePortfolioSelect,
  toggleConstactSelect,
} = menuSlice.actions;
export default menuSlice.reducer;
