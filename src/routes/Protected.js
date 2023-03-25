import React, { useContext } from 'react';
import {  Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Protected() {
  const {currentUser} = useContext(AuthContext);

  return (
    currentUser ? <Outlet/> : <Navigate to='/'/>
  );
}

export default Protected;