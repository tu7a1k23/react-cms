import React, { Component } from 'react'
import { HashRouter } from 'ext-react'
import Header from './header'

export default class Viewport extends Component {
  render() {
    return <section className="d-flex flex-column">
      <Header />
      <main className="flex">
        <HashRouter />
      </main>
    </section>
  }
}