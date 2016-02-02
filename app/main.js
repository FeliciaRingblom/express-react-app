import React from 'react';
import ReactDOM from 'react-dom';
import IdeaList from './components/idea/ideaList';

const ideas = [{
  header: 'Idea-heading 1',
  desc: 'Idea description...',
  location: 'Home',
  points: 0,
  creator: 'Me',
  added: '2016-02-02',
  id: 0
}, {
  header: 'Idea-heading 2',
  desc: 'Idea description...',
  location: 'Home',
  points: 0,
  creator: 'Me',
  added: '2016-02-02',
  id: 1
}, {
  header: 'Idea-heading 3',
  desc: 'Idea description...',
  location: 'Home',
  points: 0,
  creator: 'Me',
  added: '2016-02-02',
  id: 2
},
];

ReactDOM.render(<IdeaList ideas={ ideas } />, document.getElementById('app'));
