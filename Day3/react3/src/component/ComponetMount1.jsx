import React, { Component } from 'react'

export default class ComponetMount1 extends Component {
    componentWillUnmount()
    {
        alert("Child Removed")
    }
  render() {
    return (
      <>
        <div>ComponetMount1</div>
      </>
    )
  }
}
