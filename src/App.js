
import './App.css';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';

import Profile from './profile';
import Home from './home';
import LoginButton from './login';
import Header from './header';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0ProviderWithRedirectCallback
            domain="rovners.dse.ninja"
            clientId="YCRUG9Z7TmakswUOi3ZhEC045DYZs8l1"
            authorizationParams={{
              redirect_uri: window.location.origin,
              //audience: 'https://expenses-api', // Value in Identifier field for the API being called.
              scope: 'openid profile email', // Scope that exists for the API being called. You can create these through the Auth0 Management API or through the Auth0 Dashboard in the Permissions view of your API.
                  
            }}>   
            <Header />   
            
            <Routes>

              <Route path="/" element={<Home/> } />
              <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
              
            </Routes>
            <LoginButton />
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    </div> 
  );
}

export default App;
