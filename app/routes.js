import React from 'react';
import App from './components/app';
import IdeaList from './components/idea/ideaList';
import { Router, Route } from 'react-router';
import history from './history';

export default () => {
  return (
     <Router history= { history }>
      <Route path="/" component = { App }>
        <Route path="ideas" component={ IdeaList }/>
      </Route>
    </Router>
  );
};
