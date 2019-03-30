import React, { Component, Fragment } from 'react';
import { Ellipsis, Ripple, Ring } from 'react-css-spinner';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Ellipsis />
        <Ripple />
        <Ring />
      </Fragment>
    );
  }
}

export default App;
