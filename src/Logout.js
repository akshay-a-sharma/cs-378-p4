import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Logout = () => {
  const {isAuthenticated, logout} = useAuth0();
  if (isAuthenticated)
  {
    return (
        <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
      )
  }

}

export default Logout