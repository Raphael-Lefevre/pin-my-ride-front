import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import User from './components/User';
import Ride from './components/Ride';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/ride" component={Ride} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
