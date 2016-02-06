import alt from '../alt';
import IdeaActions from '../actions/ideaActions';

class ideaStore {
  constructor() {
    this.bindActions(IdeaActions);
    this.ideas = [];
  }

  onGetIdeasSuccess(data) {
    this.ideas = data;
  }

  onGetIdeasFail(jqXhr) {
    console.log(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(ideaStore);
