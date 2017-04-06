import React, { Component } from 'react'
import SearchForm from './search-form'
import SearchResult from './search-result'

export default class Search extends Component {
  render() {
    return <section>
      <h1>Search</h1>
      <SearchForm />
      <SearchResult />
    </section>
  }
}