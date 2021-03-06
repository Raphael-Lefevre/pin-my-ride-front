/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from './UserContext';
import Login from './components/Login';
import SignIn from './components/SignIn';
import User from './components/User';
import RideMap from './components/Ride';
import Ride2Map from './components/Ride2';
import CheckAuth from './CheckAuth';
import Header from './components/Header';
import AddRide from './components/AddRide';

const Router = () => {
  const [tokenJwt, setTokenJwt] = useState('');
  const [profil, setProfil] = useState('');
  const [email, setEmail] = useState('');

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          tokenJwt,
          setTokenJwt,
          profil,
          setProfil,
          email,
          setEmail,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/addride" component={AddRide} />
          <Route exact path="/ride2map" component={Ride2Map} />
          <Route exact path="/ridemap" component={RideMap} />
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
