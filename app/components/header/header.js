import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/ideas">Ideas</Link></li>
    </ul>
  );
};
