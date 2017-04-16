import React, { Component } from 'react'
import CardService from '~/services/card'
import { Button, Text } from '~/components/bootstrap'

export default class SearchForm extends Component {
  render() {
    return <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 offset-sm-2 form-group">
            <Text placeholder="Card Name" />
          </div>
          <div className="col-sm-4 form-group">
            <Text placeholder="Card Type" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 offset-sm-2 form-group">
            <Text placeholder="Armor Usable" />
          </div>
          <div className="col-sm-4 form-group">
            <Text placeholder="Weapon Usable" />
          </div>
        </div>
        <div className="text-sm-center">
          <Button type="primary" text="Filter" onClick={() => this.onSearch()} />
          <Button text="Clear" />
        </div>
      </div>
    </section>
  }

  onSearch() {
    CardService.search({ type: 'Melee' })
  }
}