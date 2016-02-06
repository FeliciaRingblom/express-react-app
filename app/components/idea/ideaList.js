import React from 'react';
import IdeaItem from './ideaItem';
import IdeaStore from '../../stores/ideaStore';
import IdeaActions from '../../actions/ideaActions';

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = IdeaStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    IdeaStore.listen(this.onChange);
    IdeaActions.getIdeas(this.props.params);
  }
  componentDidUpdate(prevProps) {
    if (!Object.is(prevProps.params, this.props.params)) {
      IdeaActions.getIdeas(this.props.params);
    }
  }

   componentWillUnmount() {
     IdeaStore.unlisten(this.onChange);
   }

   onChange(state) {
     this.setState(state);
   }

  render() {
    const ideaItems = this.state.ideas.map( idea => {
      return <IdeaItem key={ idea._id } idea={ idea } />;
    });
    return (
      <div className="row">
        { ideaItems }
      </div>
    );
  }
}

IdeaList.propTypes = {
  params: React.PropTypes.object
};

export default IdeaList;
