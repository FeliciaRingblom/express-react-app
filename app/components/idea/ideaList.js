import React from 'react';
import IdeaListItem from './ideaListItem';
import IdeaListStore from '../../stores/ideaListStore';
import IdeaListActions from '../../actions/ideaListActions';

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = IdeaListStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    IdeaListStore.listen(this.onChange);
    IdeaListActions.getIdeas(this.props.params);
  }
  componentDidUpdate(prevProps) {
    if (!Object.is(prevProps.params, this.props.params)) {
      IdeaListActions.getIdeas(this.props.params);
    }
  }

   componentWillUnmount() {
     IdeaListStore.unlisten(this.onChange);
   }

   onChange(state) {
     this.setState(state);
   }

  render() {
    const ideaItems = this.state.ideas.map( idea => {
      return <IdeaListItem key={ idea._id } idea={ idea } />;
    });
    return (
      <div>
        { ideaItems }
      </div>
    );
  }
}

IdeaList.propTypes = {
  params: React.PropTypes.object
};

export default IdeaList;
