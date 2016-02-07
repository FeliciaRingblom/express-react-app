import React from 'react';
import IdeaForm from './ideaForm';
import IdeaItemActions from '../../actions/ideaItemActions';
import Toastr from '../../../bower_components/toastr/toastr';

class ManageIdea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: {
        header: '',
        desc: '',
        location: '',
        labels: '',
        points: 0,
        creator: 'Me'
      },
      errors: {},
      dirty: false
    };
  }
  setIdeaState(event) {
    this.setState({dirty: true});
    const field = event.target.name;
    const value = event.target.value;
    this.state.idea[field] = value;
    return this.setState({idea: this.state.idea});
  }
  ideaFormIsValid() {
    let formIsValid = true;
    this.state.errors = {};

    if (this.state.idea.header.length < 3) {
      this.state.errors.header = 'Heading must be at least 3 characters';
      formIsValid = false;
    }

    if (this.state.idea.desc.length < 3) {
      this.state.errors.desc = 'Description must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  }
  saveIdea(event) {
    event.preventDefault();
    if (!this.ideaFormIsValid()) {
      return;
    }

    IdeaItemActions.createIdea(this.state.idea);

    this.setState({dirty: false});
    Toastr.success('Idea saved');
  }
  render() {
    return (
      <IdeaForm
				idea={this.state.idea}
				onChange={this.setIdeaState.bind(this)}
				onSave={this.saveIdea.bind(this)}
				errors={this.state.errors}/>
    );
  }
}

ManageIdea.propTypes = {
  params: React.PropTypes.object
};

export default ManageIdea;
