import React, { Component } from 'react'
import CardStore from '~/stores/card'
import Grid from '~/ux/grid'

export default class SearchResult extends Component {
  render() {
    return <section className="flex">
      <Grid store={CardStore}>
        <div text="ID" dataIndex="Id" width={150} />
        <div text="Name" dataIndex="Name" width={250} />
        <div text="Type" dataIndex="Type" width={150} />
        <div text="Introduction" dataIndex="Introduction" width={1000} />
        <div text="STR" dataIndex="STR" width={50} />
        <div text="AGI" dataIndex="AGI" width={50} />
        <div text="HP" dataIndex="HP" width={50} />
        <div text="DEX" dataIndex="DEX" width={50} />
        <div text="INT" dataIndex="INT" width={50} />
        <div text="SEN" dataIndex="SEN" width={50} />
        <div text="Armor" dataIndex="ArmorUsable" width={200} />
        <div text="Weapon" dataIndex="WeaponUsable" width={200} />
      </Grid>
    </section>
  }
}