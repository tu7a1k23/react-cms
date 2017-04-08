import React, { Component } from 'react'
import SearchForm from './search-form'
import SearchResult from './search-result'

export default class Search extends Component {
  componentDidMount() {

  }

  render() {
    return <section className="d-flex flex-column">
      <h1>Search</h1>
      <SearchForm />
      <p></p>
      <SearchResult />
    </section>
  }
}