import React from 'react';
import { Route } from 'react-router-dom';
import TeacherDisciplines from '../components/pages/TeacherDisciplines';
import ProfileTeacher from '../components/pages/ProfileTeacher';
import Protected from './Protected';

const TeacherRoutes = () => {
  <Route
    element={<Protected/>}>
    <Route element={<ProfileTeacher/>}
      path='/profileTeacher'/>
    <Route element={<TeacherDisciplines/>}
      path='/teacherDisciplines'/>
  </Route>;
};

export default TeacherRoutes;