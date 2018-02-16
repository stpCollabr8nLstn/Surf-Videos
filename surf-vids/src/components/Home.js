import React, { Component } from 'react';
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="sv--home">
        <Nav></Nav>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
