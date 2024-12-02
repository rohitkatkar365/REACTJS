import React, { createRef} from 'react'
import { Component } from 'react';

export default class ReF extends Component{
    constructor()
    {
        super();
        this.inputRef = createRef();
    }
    getVal()
    {
        this.inputRef.current.style.color="red";
        alert(this.inputRef.current.value);
    }
  render() {
    return (
        <>
            <h1>Ref in react</h1>
            <input ref={this.inputRef} type="text"/>
            <button onClick={()=>this.getVal()}>Get Value</button>
        </>
    )
  }
}
