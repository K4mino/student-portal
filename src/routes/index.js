import {  Navigate, Route, Routes} from 'react-router-dom';
import React from 'react';

import Protected from './Protected';
import Profile from '../components/pages/Profile';
import DashBoard from '../components/pages/DashBoard';
import Login from '../components/pages/Login';
import PasswordRecovery from '../components/pages/PasswordRecovery';
import Registration from '../components/pages/Registration';
import Chat from '../components/pages/Chat';

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
        <Route/>
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