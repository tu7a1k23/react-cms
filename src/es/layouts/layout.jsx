import React, { Component } from 'react';
import AppConfig from '~/common/config';
import { IndexLink, Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return <section className="vbox">
      <header>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <a className="navbar-brand" href="/">React CMS</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <IndexLink to="/" className="nav-link" activeClassName="active">Dashboard</IndexLink>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link" activeClassName="active">Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/audit-trail" className="nav-link" activeClassName="active">Audit Trail</Link>
              </li>
              <li className="nav-item">
                <Link to="/monitoring" className="nav-link" activeClassName="active">Monitoring</Link>
              </li>
              <li className="nav-item">
                <Link to="/administration" className="nav-link" activeClassName="active">Administration</Link>
              </li>
            </ul>
            <span className="navbar-text">
              Hello, <strong>{AppConfig.get('name')}</strong>
            </span>
          </div>
        </nav>
      </header>
      <main className="flex">
        {this.props.children}
      </main>
      <footer className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="container-fluid">
          <p className="text-muted">&copy;2017 React CMS</p>
        </div>
      </footer>
    </section>;
  }
}