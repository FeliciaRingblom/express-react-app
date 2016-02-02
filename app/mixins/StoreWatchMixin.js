import React from 'react';
import IdeaStore from '../stores/ideaStore';

export default ( InnerComponent, stateCallback ) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateCallback( props );
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    IdeaStore.addChangeListener( this._onChange );
  }
  componentWillUnmount() {
    IdeaStore.removeChangeListener( this._onChange );
  }
  _onChange() {
    this.setState( stateCallback( this.props ) );
  }
  render() {
    return <InnerComponent {...this.state} {...this.props} />;
  }
};
