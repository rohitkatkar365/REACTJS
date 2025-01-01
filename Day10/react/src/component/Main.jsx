import React, { Component } from 'react';
import { CommonContext } from './CommonContext';

class Main extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          // Use parentheses for implicit return
          <h1 style={{backgroundColor:color}}>Hello, This is main page</h1>
        )}
      </CommonContext.Consumer>
    );
  }
}

export default Main;
