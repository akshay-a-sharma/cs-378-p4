import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const onRedirectCallback = (appState) => {
  window.location.href = (appState?.returnTo || window.location.pathname);
};

root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
