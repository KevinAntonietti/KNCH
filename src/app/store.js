import { configureStore } from '@reduxjs/toolkit';
import { portfolioSlice } from '../features/portfolio.slice';
import {menuSlice} from '../features/menu.slice';


export const store = configureStore({
  reducer: {
    menu:menuSlice.reducer,
    portfolio:portfolioSlice.reducer
  },
});
