import React from "react";

class Constructor extends React.Component {
    // First Constructor Called
    constructor()
    {
        super();
        console.warn("constructor called");
        
    }
  render() {
    // Second render called
    console.warn("render called");
    
    return <>
        <div>Hello Constructor</div>
    </>;
  }
}

export default Constructor;