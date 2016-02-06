import React from 'react';
import App from './components/app';
import IdeaList from './components/idea/ideaList';
import IdeaItem from './components/idea/ideaItem';
import { Router, Route } from 'react-router';
import history from './history';

export default () => {
  return (
     <Router history= { history }>
      <Route path="/" component = { App }>
        <Route path="ideas" component={ IdeaList }/>
        <Route path="idea/:id" component={ IdeaItem } />
      </Route>
    </Router>
  );
};
