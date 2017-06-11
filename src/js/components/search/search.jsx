import React, { Component } from 'react'
import { Route } from 'ext-react'
import SearchForm from './search-form'
import SearchResult from './search-result'

@Route('/search')
export default class Search extends Component {
  render() {
    return <section className="d-flex flex-column card">
      <SearchForm />
      <SearchResult />
    </section>
  }
}