import React, { Component } from 'react'
import { Route, Link } from 'ext-react'
import Config from '~/common/config'
import NotFound from './notfound'
import Dashboard from './dashboard/dashboard'
import Search from './search/search'
import Test from './test/test'

export default class App extends Component {
  render() {
    return <section className="d-flex flex-column">
      <header>
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
      <main className="flex">
        <Route index component={Dashboard} />
        <Route path="/search" component={Search} />
        <Route path="/test" component={Test} />
        <Route notfound component={NotFound} />
      </main>
    </section>
  }
}