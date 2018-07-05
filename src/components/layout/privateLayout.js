import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route } from 'react-router-dom';
import { fakeAuth } from './../../setting/authen';
import Header from './../header';

const PrivateLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <React.Fragment>
            <Header />
            <hr />
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateLayout;
