import React, { Component } from 'react';

export default class ComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "BOM",
      cnt: 0
    };
    console.warn("Constructor Called");
  }

  componentDidMount() {
    console.warn("ComponentDidMount Called");
  }

  // When state or props update, this method is called
  componentDidUpdate(prevProps, prevState) {
    console.warn("ComponentDidUpdate Called");
    if (prevState.cnt !== this.state.cnt) {
      console.warn(`Count updated from ${prevState.cnt} to ${this.state.cnt}`);
    }
  }

  render() {
    console.warn("Render Called");
    return (
      <>
        <div>ComponentDidUpdate Name: {this.state.name}</div>
        <div>ComponentDidUpdate Count: {this.state.cnt}</div>
        <button onClick={() => this.setState({ name: "DOM" })}>
          Update Name
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({ cnt: prevState.cnt + 1 }))
          }
        >
          Update Count
        </button>
      </>
    );
  }
}
