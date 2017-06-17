import React, { Component } from 'react'
import { Route, Container } from 'ext-react'
import SearchForm from './search-form'
import SearchResult from './search-result'

@Route('/search')
export default class Search extends Component {
  render() {
    return <Container className="panel-body">
      <h1>Search</h1>
      <SearchForm />
      <SearchResult />
    </Container>
  }
}