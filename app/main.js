import React from 'react';
import ReactDOM from 'react-dom';
import IdeaItem from './components/idea/ideaItem';

const idea = {
  header: 'Idea-heading',
  desc: 'Idea description...',
  location: 'Home',
  points: 0,
  creator: 'Me',
  added: '2016-02-02'
};

console.log(idea);

ReactDOM.render(<IdeaItem idea={ idea } />, document.getElementById('app'));
