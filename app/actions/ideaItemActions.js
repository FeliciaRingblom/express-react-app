import alt from '../alt';
import $ from 'jquery';

class IdeaItemActions {
  constructor() {
    this.generateActions(
      'getIdeaSuccess',
      'getIdeaFail',
      'createIdeaSuccess',
      'createIdeaFail'
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

  createIdea(idea) {
    $.ajax({
      type: 'POST',
      url: '../api/ideas/',
      data: idea
    })
      .done((data) => {
        this.actions.createIdeaSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.createIdeaFail(jqXhr);
      });
  }
}

export default alt.createActions(IdeaItemActions);
