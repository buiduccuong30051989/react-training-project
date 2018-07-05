import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Header from './../header';

export const PublicLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className='DefaultLayout'>
        <Header />
        <hr />
        <Component {...props} />
      </div>
    )} />
  )
}
