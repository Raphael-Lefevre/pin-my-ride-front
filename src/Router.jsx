/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from './UserContext';
import Login from './components/Login';
import SignIn from './components/SignIn';
import User from './components/User';
import RideMap from './components/Ride';
import CheckAuth from './CheckAuth';
import Header from './components/Header';

const Router = () => {
  const [tokenJwt, setTokenJwt] = useState('');
  const [email, setEmail] = useState('');

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          tokenJwt,
          setTokenJwt,
          email,
          setEmail,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={SignIn} />
          <CheckAuth
            component={User}
            header={Header}
            tokenAuth={tokenJwt}
            pathName=""
          />
          <CheckAuth
            component={RideMap}
            header={Header}
            tokenAuth={tokenJwt}
            pathName="ridemap"
          />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
