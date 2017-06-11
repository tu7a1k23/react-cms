import React, { Component } from 'react';
import { Link, Cache } from 'ext-react';

export default class extends Component {
  render() {
    return <header>
      <div className="brand">React CMS</div>
      <div className="navbar">
        <ul className="navbar-nav mr-auto">
          <Link to="/" className="nav-item">Dashboard</Link>
          <Link to="/search" className="nav-item">Search</Link>
          <Link to="/reporting" className="nav-item">Reporting</Link>
          <Link to="/admin" className="nav-item">Administration</Link>
        </ul>
        <div>Hello, <strong>{Cache.get('configuration').name}</strong></div>
      </div>
    </header>;
  }
}