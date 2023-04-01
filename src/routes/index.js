import {  Navigate, Route, Routes} from 'react-router-dom';
import React from 'react';

import Protected from './Protected';
import Profile from '../components/pages/Profile';
import DashBoard from '../components/pages/DashBoard';
import Login from '../components/pages/Login';
import PasswordRecovery from '../components/pages/PasswordRecovery';
import Registration from '../components/pages/Registration';
import Chat from '../components/pages/Chat';
import News from '../components/pages/News';
import Quiz from '../components/pages/Quiz';
import Disciplines from '../components/pages/Disciplines';
import Tasks from '../components/pages/Tasks';
import Homework from '../components/pages/Homework';
import Journal from '../components/pages/Journal';

export function CustomRoutes() {
  return (
    <Routes>
      <Route element={<Login/>}
        path='/'/>
      <Route
        element={<Protected/>}>
        <Route element={<DashBoard/>}
          path='/dashboard'/>
        <Route element={<Profile/>}
          path='/profile'
        />
        <Route element={<Chat/>}
          path='/chats'/>
        <Route element={<News/>}
          path='/news'
        />
        <Route element={<Journal/>}
          path='/journal'/>
        <Route element={<Quiz/>}
          path='/disciplines/tasks/quiz'/>
        <Route element={<Disciplines/>}
          path='/disciplines'/>
        <Route element={<Tasks/>}
          path='/disciplines/tasks'/>
        <Route element={<Homework/>}
          path='/disciplines/tasks/homework'/>
      </Route>

      <Route element={<Registration/>}
        path='/registration'/>
      <Route element={<PasswordRecovery/>}
        path='/passwordRecovery'/>
      <Route element={<Navigate to='/'/>}
        path='/*'/>
    </Routes>
  );
}