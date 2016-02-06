import alt from '../alt';
import $ from 'jquery';

class IdeaListActions {
  constructor() {
    this.generateActions(
      'getIdeasSuccess',
      'getIdeasFail'
    );
  }

  getIdeas() {
    $.ajax({
      type: 'GET',
      url: '../api/ideas/'
    })
      .done((data) => {
        this.actions.getIdeasSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getIdeasFail(jqXhr);
      });
  }
}

export default alt.createActions(IdeaListActions);
