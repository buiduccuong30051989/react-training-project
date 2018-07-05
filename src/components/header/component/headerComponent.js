import React from 'react';
import ReactDOM from 'react-dom';
import { fakeAuth, AuthButton } from './../../../setting/authen';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Public Route Home</Link>
      </li>
      <li>
        <Link to='/topics'>Neste Route Topics</Link>
      </li>
      <li>
        <Link to='/flag'>Authentication Route Flag</Link>
      </li>
      <li>
        <AuthButton />
      </li>
    </ul>
  )
}

export default Header;
