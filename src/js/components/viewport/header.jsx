import React, { Component } from 'react';
import { Link, Cache } from 'ext-react';

export default class extends Component {
  render() {
    return <header className="bg-inverse">
      <div className="brand">React CMS</div>
      <div className="navbar">
        <ul className="navbar-nav mr-auto">
          <Link to="/" className="nav-item">Characters</Link>
          <Link to="/items" className="nav-item">Items</Link>
        </ul>
        <div>Hello, <strong>{Cache.get('configuration').name}</strong></div>
      </div>
    </header>;
  }
}