import { configureStore } from '@reduxjs/toolkit';
import { portfolioSlice } from '../features/portfolio.slice';


export const store = configureStore({
  reducer: {
    portfolio:portfolioSlice.reducer
  },
});
