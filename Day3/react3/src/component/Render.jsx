import React, { Component } from 'react'

export default class Render extends Component {
  render() {
    console.warn("Render Method Called",this.props.cnt);
    return (
      <div>Render {this.props.cnt}</div>
    )
  }
}
