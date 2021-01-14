/* eslint-disable react/jsx-props-no-spreading */
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function LayoutedRoutes({
  component: Component,
  header: Header,
  pathName: PathName,
  ...rest
}) {
  return (
    <Route
      exact
      path={`/${PathName}`}
      {...rest}
      render={(props) => {
        return (
          <>
            <Header />
            <Component {...props} />
          </>
        );
      }}
    />
  );
}

LayoutedRoutes.propTypes = {
  component: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default LayoutedRoutes;
