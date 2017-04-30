import React, { Component } from 'react'
import CardService from '~/services/card'
import { Button, Text } from '~/ux/bootstrap'

export default class SearchForm extends Component {
  render() {
    return <section>
      <div className="form-inline mb-sm">
        <Text placeholder="Card Name" className="mr-sm" />
        <Text placeholder="Card Type" className="mr-sm" />
        <Text placeholder="Armor Usable" className="mr-sm" />
        <Text placeholder="Weapon Usable" className="mr-sm" />
        <Button type="primary" text="Filter" className="mr-sm" onClick={() => this.onSearch()} />
        <Button text="Clear" />
      </div>
    </section>
  }

  onSearch() {
    CardService.search({ type: 'Melee' })
  }
}