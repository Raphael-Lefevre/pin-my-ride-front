/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import User from './components/User';
import Ride from './components/Ride';
import CheckAuth from './CheckAuth';
import Header from './components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={SignIn} />
        <CheckAuth
          component={User}
          header={Header}
          tokenAuth={localStorage.getItem('token')}
          pathName="home"
        />
        <CheckAuth
          component={Ride}
          header={Header}
          tokenAuth={localStorage.getItem('token')}
          pathName="ride"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
