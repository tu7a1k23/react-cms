import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import AppConfig from '~/common/config';
import Dashboard from '~/components/dashboard/dashboard';
import Search from '~/components/search/search';
import NotFound from '~/components/notfound/notfound';

export default class Routes extends Component {
  render() {
    return <HashRouter>
      <section className="d-flex flex-column">
        <header>
          <nav className="navbar navbar-toggleable-md">
            <NavLink exact to="/" className="navbar-brand">React CMS</NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/search" className="nav-link">Search</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/reporting" className="nav-link">Reporting</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/audit-trails" className="nav-link">Audit Trails</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/analytics" className="nav-link">Analytics</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/administration" className="nav-link">Administration</NavLink>
                </li>
              </ul>
              <span className="navbar-text">
                Hello, <strong>{AppConfig.get('name')}</strong>
              </span>
            </div>
          </nav>
        </header>
        <main className="flex">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/search" component={Search} />
        </main>
        <footer className="navbar">
          <div className="container-fluid">
            <p className="text-muted">&copy;2017 React CMS</p>
          </div>
        </footer>
      </section>
    </HashRouter>;
  }
}