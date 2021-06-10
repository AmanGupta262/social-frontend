import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component,  ...rest }) {
  console.log("private")
  return (
    <Route
      {...rest}
      render={(props) =>
        (localStorage.getItem('token') && localStorage.getItem('token').length > 100 )?
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