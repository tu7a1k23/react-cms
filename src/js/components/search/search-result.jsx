import React, { Component } from 'react'
import FamilyStore from '~/stores/family'
import { Container } from 'ext-react'


@Container({
  stores: [FamilyStore]
})
export default class SearchResult extends Component {
  render() {
    console.log(this.props.stores.FamilyStore)
    return <section></section>
  }
}