import React from 'react';
import Header from './header/header';

const App = (props) => {
  return (
    <div className="container">
      <Header />
        { props.children }
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
