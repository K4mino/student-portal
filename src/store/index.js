import { configureStore } from '@reduxjs/toolkit';
import rightBarReducer from '../components/reducers/rightbarReducer';
import  quizReducer  from '../components/reducers/quiz';

export const store = configureStore({
  reducer:{
    rightBar:rightBarReducer,
    quiz:quizReducer
  }
});