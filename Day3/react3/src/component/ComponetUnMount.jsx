import React, { Component } from 'react';
import ComponetMount1 from './ComponetMount1';

export default class ComponetUnMount extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <>
        {
          this.state.show 
            ? <ComponetMount1 /> 
            : <h1>Child Component Is Removed</h1>
        }
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </>
    );
  }
}
