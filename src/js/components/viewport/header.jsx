import React, { Component } from 'react'
import { Link } from 'ext-react'
import Config from '~/common/config'

export default class Viewport extends Component {
  render() {
    return <header>
      <nav className="navbar navbar-toggleable-md">
        <Link to="/" className="navbar-brand">React CMS</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/reporting" className="nav-link">Reporting</Link>
            </li>
            <li className="nav-item">
              <Link to="/audit-trails" className="nav-link">Audit Trails</Link>
            </li>
            <li className="nav-item">
              <Link to="/analytics" className="nav-link">Analytics</Link>
            </li>
            <li className="nav-item">
              <Link to="/administration" className="nav-link">Administration</Link>
            </li>
          </ul>
          <span className="navbar-text">
            Hello, <strong>{Config.get('name')}</strong>
          </span>
        </div>
      </nav>
    </header>
  }
}