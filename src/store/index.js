import { configureStore } from '@reduxjs/toolkit';
import rightBarReducer from '../components/reducers/rightbarReducer';

export const store = configureStore({
  reducer:{
    rightBar:rightBarReducer,
  }
});