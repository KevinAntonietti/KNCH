import {  createSlice } from "@reduxjs/toolkit";
import DATA from "../data/portfolio.json";


const initialState = {
  items:[],
  loading:false
}


export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {

    setResetState:(state, action)=> {
      state.items=DATA },

    toggleFilter:(state,action)=>
    {
      const filterState = state.items.filter(item => item.type === action.payload)
    return {...state, items:filterState}  
    },

    // toggleSearchFilter:(state,action)=>{

    // const filterSearch= state.filter(item=> 
    // item.name.toLowerCase().includes(action.payload) || item.type.toLowerCase().includes(action.payload))
    
    // return [...filterSearch] 
    // }
    
  },

});

export const { setResetState, toggleFilter,toggleSearchFilter } = portfolioSlice.actions;
export default portfolioSlice.reducer;
