import React, { Component } from 'react'
import CardStore from '~/stores/card'
import Grid from '~/ux/grid'
import { Checkbox, Link } from '~/ux/bootstrap'

export default class SearchResult extends Component {
  render() {
    return <section className="flex">
      <Grid store={CardStore}>
        <div dataIndex="Id" width={30} render={() => <Checkbox />} />
        <div text="Name" dataIndex="Name" width={250} render={(name) => <Link text={name} />} />
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
    </section>
  }
}