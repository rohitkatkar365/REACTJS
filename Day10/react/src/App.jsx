import React, { Component } from 'react';
import { CommonContext } from './component/CommonContext';
import Main from './component/Main';
import Button from './component/Button';
import Header from './component/Header';
import Footer from './component/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "green",
      updateColor: this.updateColor 
    };
  }

  updateColor = (c) => {
    this.setState({ color: c});
  };

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header></Header>
        <h1>Context API</h1>
        <Main />
        <Button></Button>
        <Footer></Footer>
      </CommonContext.Provider>
    );
  }
}
