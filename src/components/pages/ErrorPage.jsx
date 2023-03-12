import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {

  const navigate = useNavigate();

  return (
    <h1>You are not signed in <button onClick={() => navigate('/protected')}>GO</button></h1>
  );
}

export default ErrorPage;