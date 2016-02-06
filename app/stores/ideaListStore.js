import alt from '../alt';
import IdeaListActions from '../actions/ideaListActions';

class ideaListStore {
  constructor() {
    this.bindActions(IdeaListActions);
    this.ideas = [];
  }

  onGetIdeasSuccess(data) {
    this.ideas = data;
  }

  onGetIdeasFail(jqXhr) {
    console.log(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(ideaListStore);
