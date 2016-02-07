import React from 'react';
import App from './components/app';
import Home from './components/home';
import IdeaList from './components/idea/ideaList';
import IdeaItem from './components/idea/ideaItem';
import ManageIdea from './components/idea/manageIdea';
import { Route } from 'react-router';

export default (
  <Route component={ App }>
    <Route path="/" component={ Home } />
    <Route path="/ideas" component={ IdeaList } />
    <Route path="/idea/:id" component={ IdeaItem } />
    <Route path="/add-idea" component ={ ManageIdea } />
  </Route>
);
