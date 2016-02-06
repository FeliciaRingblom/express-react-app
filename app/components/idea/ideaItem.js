import React from 'react';

const Ideaidea = (props) => {
  return (
    <div>
      <h3>{ props.idea.header }</h3>
      <p>{ props.idea.desc }</p>
      <p>{ props.idea.location }</p>
      <p>{ props.idea.points }</p>
      <p>{ props.idea.creator }</p>
      <p>{ props.idea.created }</p>
    </div>
  );
};

Ideaidea.propTypes = {
  idea: React.PropTypes.object.isRequired,
};

export default Ideaidea;
