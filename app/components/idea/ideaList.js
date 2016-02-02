import React from 'react';
import IdeaItem from './ideaItem';
import IdeaStore from '../../stores/IdeaStore';

class IdeaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ideas: IdeaStore.getIdeas()};
  }

  render() {
    const ideaItems = this.state.ideas.map( idea => {
      return <IdeaItem key={ idea.id } idea={ idea } />;
    });
    return (
      <div className="row">
        { ideaItems }
      </div>
    );
  }
}

export default IdeaList;
