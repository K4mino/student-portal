import { configureStore } from '@reduxjs/toolkit';
import rightBarReducer from '../components/reducers/rightbarReducer';
import  quizReducer  from '../components/reducers/quiz';
import chatReducer from '../components/reducers/chat';
import roleReducer from '../components/reducers/role';

export const store = configureStore({
  reducer:{
    rightBar:rightBarReducer,
    quiz:quizReducer,
    chat:chatReducer,
    role:roleReducer
  }
});