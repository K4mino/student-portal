import React from 'react';
import { Route } from 'react-router-dom';
import Quiz from '../components/pages/Quiz';
import Disciplines from '../components/pages/Disciplines';
import Tasks from '../components/pages/Tasks';
import Homework from '../components/pages/Homework';
import Journal from '../components/pages/Journal';
import Library from '../components/pages/Library';
import Protected from './Protected';
import Profile from '../components/pages/Profile';

const StudentRoutes = () => {
  <Route
    element={<Protected/>}>
    <Route element={<Profile/>}
      path='/profile'
    />
    <Route element={<Journal/>}
      path='/journal'/>
    <Route element={<Library/>}
      path='/library'/>
    <Route element={<Quiz/>}
      path='/disciplines/:id/tasks/quiz'/>
    <Route element={<Disciplines/>}
      path='/disciplines'/>
    <Route element={<Tasks/>}
      path='/disciplines/:id/tasks'/>
    <Route element={<Homework/>}
      path='/disciplines/:id/tasks/homework'/>
  </Route>;
};

export default StudentRoutes;