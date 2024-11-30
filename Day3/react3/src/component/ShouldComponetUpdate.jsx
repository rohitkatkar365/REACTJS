import React, { Component } from 'react'

export default class ShouldComponetUpdate extends Component {
    constructor(){
        super();
        this.state = {
            cnt : 0
        }
    }
    shouldComponentUpdate()
    {
        console.warn("shouldComponetUpdate");
        return true;
    }
  render() {
    console.warn("Render Called");
    return (
      <>
        <div>shouldComponetUpdate {this.state.cnt}</div>
        <button onClick={()=>this.setState({cnt:this.state.cnt+1})}>Update Count</button>
      </>
    )
  }
}
