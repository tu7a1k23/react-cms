import React, { Component } from 'react';
import { Container, Grid } from 'ext-react';
import CardStore from '~/stores/card';

export default class extends Component {
  render() {
    return <Container>
      <Grid store={CardStore}>
        <div text="ID" dataIndex="Id" className="text-center" style={{width:150}} />
        <div text="Name" dataIndex="Name" className="text-center" style={{width:250}} />
        <div text="Type" dataIndex="Type" className="text-center" style={{width:100}} />
        <div text="Introduction" dataIndex="Introduction" className="text-center" style={{width:1000}} />
        <div text="STR" dataIndex="STR" className="text-center" style={{width:50}} />
        <div text="AGI" dataIndex="AGI" className="text-center" style={{width:50}} />
        <div text="HP" dataIndex="HP" className="text-center" style={{width:50}} />
        <div text="DEX" dataIndex="DEX" className="text-center" style={{width:50}} />
        <div text="INT" dataIndex="INT" className="text-center" style={{width:50}} />
        <div text="SEN" dataIndex="SEN" className="text-center" style={{width:50}} />
        <div text="Armor" dataIndex="ArmorUsable" className="text-center" style={{width:100}} />
        <div text="Weapon" dataIndex="WeaponUsable" className="text-center" style={{width:100}} />
      </Grid>
    </Container>;
  }
}