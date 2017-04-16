import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('*')
export default class NotFound extends Component {
  render() {
    return <section>
      <h1>Not Found</h1>
    </section>
  }
}