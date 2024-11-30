import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor()
    {
        super();
        // 1
        // console.warn("Constructor Method Called");
        this.state = {
            name:"BOM"
        }
    }
    // 3
    componentDidMount()
    {
        console.warn("ComponentDidMount Method Called");
    }
  render() {
    // 2
    console.warn("Render Method Called");
    return (
      <>
        <div>ComponentDidMount {this.state.name}</div>
        <button onClick={()=>this.setState({name:"DOM"})}>Update Name</button>
      </>
    )
  }
}
