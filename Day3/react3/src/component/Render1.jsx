import React, { Component } from 'react'

export default class Render1 extends Component {
    constructor()
    {
        super();
        this.state = {
            name : "BOM"
        }
    }
  render() {
    console.warn(this.state.name);
    return (
        <>
      <div>Render1</div>
      <button onClick={()=>this.setState({name:"DOM"})}>Update Name</button>
      </>
    )
  }
}
