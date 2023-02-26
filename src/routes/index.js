import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

import Login from '../components/pages/Login';
import PasswordRecovery from '../components/pages/PasswordRecovery';
import Registration from '../components/pages/Registration';
import DashBoard from '../components/pages/DashBoard';

export  const router = createBrowserRouter([
	{
		path:'/registration',
		element:<Registration/>
	},
	{
		path:'/',
		element:<Login/>
	},
	{
		path:'/passwordRecovery',
		element:<PasswordRecovery/>
	},
	{
		path:'/dashBoard',
		element:<DashBoard/>
	}
]);