import React from 'react';
import IdeaItemStore from '../../stores/ideaItemStore';
import IdeaItemActions from '../../actions/ideaItemActions';

class IdeaItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = IdeaItemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    IdeaItemStore.listen(this.onChange);
    IdeaItemActions.getIdea(this.props.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      IdeaItemActions.getIdea(this.props.params.id);
    }
  }

  componentWillUnmount() {
    IdeaItemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h3>{ this.state.idea.header }</h3>
        <p>{ this.state.idea.desc }</p>
        <p>{ this.state.idea.creator }</p>
        <p>{ this.state.idea.location }</p>
        <p>{ this.state.idea.points }</p>
        <p>{ this.state.idea.created }</p>
      </div>
    );
  }
}

IdeaItem.propTypes = {
  params: React.PropTypes.object
};

export default IdeaItem;
