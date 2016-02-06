import React from 'react';
import { Link } from 'react-router';

const IdeaListItem = (props) => {
  return (
    <div>
      <Link to={'/idea/' + props.idea._id}>
        <h3>{ props.idea.header }</h3>
      </Link>
      <p>{ props.idea.desc }</p>
      <p>{ props.idea.location }</p>
      <p>{ props.idea.points }</p>
      <p>{ props.idea.creator }</p>
      <p>{ props.idea.created }</p>
    </div>
  );
};

IdeaListItem.propTypes = {
  idea: React.PropTypes.object.isRequired,
};

export default IdeaListItem;
