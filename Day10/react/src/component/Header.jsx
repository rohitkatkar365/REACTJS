import React, { Component } from 'react';
import { CommonContext } from './CommonContext';

class Header extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          // Use parentheses for implicit return
          <h1 style={{backgroundColor:color}}>Header Page</h1>
        )}
      </CommonContext.Consumer>
    );
  }
}

export default Header;
