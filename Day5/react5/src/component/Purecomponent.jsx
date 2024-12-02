import React, { PureComponent } from "react";

class Purecomponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      cnt: 0,
    };
  }
  render() {
    console.log("REnder");

    return (
      <>
        <p>PureComponent {this.state.cnt}</p>
        <button onClick={() => this.setState({ cnt: this.state.cnt + 1 })}>
          Update Count
        </button>
      </>
    );
  }
}
export default Purecomponent;
