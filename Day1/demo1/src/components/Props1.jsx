import React from "react";

class Props1 extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      cnt: props.cnt, 
    };
  }

  update() {
    this.setState({ cnt: this.state.cnt + 1 });
  }

  render() {
    return (
      <>
        <p>Count: {this.state.cnt}</p>
        <button onClick={() => this.update()}>Update</button>
      </>
    );
  }
}

export default Props1;
