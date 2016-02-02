import React from 'react';
import IdeaItem from './ideaItem';

const IdeaList = (props) => {
  const ideaItems = props.ideas.map( idea => {
    return <IdeaItem key={ idea.id } idea={ idea } />;
  });
  return (
    <div className="row">
      { ideaItems }
    </div>
  );
};

IdeaList.propTypes = {
  ideas: React.PropTypes.array.isRequired,
};

export default IdeaList;
