import React, { Component } from 'react'
import { Link, HashRouter } from 'ext-react'
import Config from '~/common/config'
import { Panel, Button } from '~/ux/bootstrap'
import Navigation from './navigation'

export default class Viewport extends Component {
  render() {
    return <section className="d-flex flex-column">
      <header className="navbar navbar-toggleable-md">
        <Link to="/" className="navbar-brand">React CMS</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto"></ul>
          <div className="form-inline mr-sm">
            <Link to="/new" className="btn btn-sm btn-link">Create New Records</Link>
          </div>
          <span className="navbar-text">
            Hello, <strong>{Config.get('name')}</strong>
          </span>
        </div>
      </header>
      <main className="flex d-flex flex-column">
        <Navigation />
        <Panel>
          <HashRouter />
        </Panel>
      </main>
      <footer className="navbar navbar-toggleable-md">
        <div className="container-fluid">
          <p>&copy; 2017 huytrongnguyen</p>
        </div>
      </footer>
    </section>
  }
}