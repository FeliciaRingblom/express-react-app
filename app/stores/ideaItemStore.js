import alt from '../alt';
import IdeaItemActions from '../actions/ideaItemActions';

class ideaItemStore {
  constructor() {
    this.bindActions(IdeaItemActions);
    this.idea = {
      header: '',
      desc: '',
      creator: '',
      location: '',
      points: 0,
      created: '',
      labels: []
    };
  }

  onGetIdeaSuccess(data) {
    this.idea = data;
  }

  onGetIdeaFail(jqXhr) {
    console.log(jqXhr.responseJSON.message);
  }
}

export default alt.createStore(ideaItemStore);
