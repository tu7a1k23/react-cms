import React, { Component } from 'react';
import { Container, HashRouter } from 'ext-react';
import Header from './header';
import Footer from './footer';

export default class extends Component {
  render() {
    return <Container>
      <Header />
      <Container hbox>
        <Container id="main-container">
          <HashRouter />
        </Container>
      </Container>
      <Footer />
    </Container>;
  }
}