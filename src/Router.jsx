import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import User from './components/User';
import Ride from './components/Ride';
import SignIn from './components/SignIn';
import AddRide from './components/AddRide';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/user" component={User} />
          <Route exact path="/ride" component={Ride} />
          <Route exact path="/addride" component={AddRide} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
