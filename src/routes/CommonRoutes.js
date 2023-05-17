import React from 'react';
import { Route,Navigate} from 'react-router-dom';
import Protected from './Protected';
import DashBoard from '../components/pages/DashBoard';
import Login from '../components/pages/Login';
import PasswordRecovery from '../components/pages/PasswordRecovery';
import Registration from '../components/pages/Registration';
import Chat from '../components/pages/Chat';
import News from '../components/pages/News';

const CommonRoutes = () => {
  return (
    <>
      <Route element={<Login/>}
        path='/'/>
      <Route element={<Registration/>}
        path='/registration'/>
      <Route element={<PasswordRecovery/>}
        path='/passwordRecovery'/>
      <Route element={<Navigate to='/'/>}
        path='/*'/>

      <Route
        element={<Protected/>}>
        <Route element={<DashBoard/>}
          path='/dashboard'/>
        <Route element={<Chat/>}
          path='/chats'/>
        <Route element={<News/>}
          path='/news'
        />
      </Route>
    </>
  );
};


export default CommonRoutes;