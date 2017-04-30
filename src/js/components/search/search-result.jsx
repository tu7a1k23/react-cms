import React, { Component } from 'react'
import CardStore from '~/stores/card'
import Grid from '~/ux/grid'
import { Checkbox, Link, Button } from '~/ux/bootstrap'
import Container from '~/ux/container'
import DialogManager from '~/ux/dialog'
import CardDetailDialog from '~/components/card/card-detail-dialog'

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.showCardDetailDialog = this.showCardDetailDialog.bind(this)
  }

  render() {
    return <Container>
    <Container>
      <Grid store={CardStore}>
        <div dataIndex="Id" width={30} render={() => <Checkbox />} />
        <div text="Name" dataIndex="Name" width={250} render={(name) => <Link text={name} onClick={this.showCardDetailDialog} />} />
        <div text="Type" dataIndex="Type" width={50} />
        <div text="Introduction" dataIndex="Introduction" />
        <div text="STR" dataIndex="STR" width={50} />
        <div text="AGI" dataIndex="AGI" width={50} />
        <div text="HP" dataIndex="HP" width={50} />
        <div text="DEX" dataIndex="DEX" width={50} />
        <div text="INT" dataIndex="INT" width={50} />
        <div text="SEN" dataIndex="SEN" width={50} />
        <div text="Armor" dataIndex="ArmorUsable" width={100} />
        <div text="Weapon" dataIndex="WeaponUsable" width={100} />
      </Grid>
    </Container>
    <div class="form-inline">
      <Button text="Save Changes" />
    </div>
    </Container>
  }

  showCardDetailDialog() {
    DialogManager.show(<CardDetailDialog />)
  }
}