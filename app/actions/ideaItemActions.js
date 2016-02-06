import alt from '../alt';
import $ from 'jquery';

class IdeaItemActions {
  constructor() {
    this.generateActions(
      'getIdeaSuccess',
      'getIdeaFail'
    );
  }

  getIdea(ideaId) {
    $.ajax({
      type: 'GET',
      url: '../api/ideas/' + ideaId
    })
      .done((data) => {
        this.actions.getIdeaSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getIdeaFail(jqXhr);
      });
  }
}

export default alt.createActions(IdeaItemActions);
