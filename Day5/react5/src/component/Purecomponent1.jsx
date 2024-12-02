import React, {PureComponent } from 'react'

export default class Purecomponent1 extends  PureComponent {
    constructor(props)
    {
        super(props);
        this.state = {
            cnt : this.props.cnt
        }
    }
  render() {
    console.log("Render1");
    
    return (
      <>
        <h1>{this.state.cnt}</h1>
        <button onClick={()=>this.setState({cnt:this.state.cnt})}>Update Count</button>
      </>
    )
  }
}
