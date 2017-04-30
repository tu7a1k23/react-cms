import React, { Component } from 'react'
import { Link } from 'ext-react'

export default class Navigation extends Component {
  render() {
    return <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <Link to="/" className="nav-link">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className="nav-link">Search</Link>
      </li>
      <li className="nav-item">
        <Link to="/administration" className="nav-link">Administration</Link>
      </li>
    </ul>
  }
}