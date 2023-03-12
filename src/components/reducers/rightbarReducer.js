import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
  isOpen:false
};

export const rightBarSlice = createSlice({
  name:'rightBar',
  initialState,
  reducers:{
    toggle:(state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const {toggle} = rightBarSlice.actions;

export default rightBarSlice.reducer;