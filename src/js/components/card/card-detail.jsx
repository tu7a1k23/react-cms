import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('/cards/:id')
export default class CardDetail extends Component {
  render() {
    return <h1>{this.props.params.id}</h1>
  }
}