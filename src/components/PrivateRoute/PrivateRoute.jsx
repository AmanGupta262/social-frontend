import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthTokenFromLocalStorage } from '../../helpers/utils'

function PrivateRoute({ component: Component,  ...rest }) {
  const token = getAuthTokenFromLocalStorage();
  return (
    <Route
      {...rest}
      render={(props) =>
        (token && token.length > 100 )?
         <Component {...props} /> : 
         <Redirect to={{
           pathname: '/login',
           state : {
             from: props.location,
           }
        }} />
      }
    />
  );
}

export default PrivateRoute;