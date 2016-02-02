import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const IdeaStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT );
  },

  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback );
  },

  removeChangeListener( callback ) {
    this.removeListener( CHANGE_EVENT, callback );
  },

  getIdeas() {
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
    return ideas;
  }
});

export default IdeaStore;
