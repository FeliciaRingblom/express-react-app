import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/ideas">Ideas</Link></li>
      <li><Link to="/add-idea">Add idea</Link></li>
    </ul>
  );
};

export default Header;
