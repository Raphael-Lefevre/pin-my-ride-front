import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import LayoutedRoutes from './LayoutedRoutes';
import Login from './components/Login';

function CheckAuth({
  component: Component,
  header: Header,
  tokenAuth: token,
  pathName: PathName,
}) {
  return (
    <>
      {token ? (
        <LayoutedRoutes
          component={Component}
          header={Header}
          pathName={PathName}
        />
      ) : (
        <Login />
      )}
    </>
  );
}

CheckAuth.propTypes = {
  component: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  tokenAuth: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default CheckAuth;
