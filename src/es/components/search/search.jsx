import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchForm from './search-form';
import SearchResult from './search-result';

export default class Search extends Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let id = 0; id < 10; ++id) {
      data.push({
        id,
        name: `Name ${id}`,
        status: 'PROCESSED',
        division: `Division ${id % 10 + 1}`,
        activity: `Activity ${id % 100 + 1}`,
        product: `Name ${id % 1000 + 1}`,
        desc: ''
      });
    }
    this.state = { data };
  }

  doSearch(criteria) {

  }

  render() {
    return <section className="vbox">
      <nav className="breadcrumb">
        <Link to="/dashboard" className="breadcrumb-item">Dashboard</Link>
        <span className="breadcrumb-item active">Search</span>
      </nav>
      <SearchForm doSearch={this.doSearch.bind(this)} />
      <SearchResult data={this.state.data} />
    </section>;
  }
}