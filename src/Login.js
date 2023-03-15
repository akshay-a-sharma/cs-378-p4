import React from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated)
  {
    return (
        <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
      )
  }


}

export default Login