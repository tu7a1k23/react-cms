import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('/cards/create')
export default class CardCreate extends Component {
  render() {
    return <h1>CardCreate</h1>
  }
}