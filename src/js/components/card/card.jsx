import React, {Component} from 'react';
import { Route, Container, Grid } from 'ext-react';
import CardStore from '~/stores/card';

@Route('/')
export default class Card extends Component {
  componentDidMount() {
    CardStore.load();
  }

  render() {
    return <Container className="panel-body">
      <h1>Characters</h1>
      <Grid store={CardStore}>
        <div text="ID" dataIndex="Id" style={{width:150}} />
        <div text="Name" dataIndex="Name" />
        <div text="Type" dataIndex="Type" />
        <div text="Type" dataIndex="Class" />
        <div text="STR" dataIndex="STR" style={{width:50,textAlign:'center'}} />
        <div text="AGI" dataIndex="AGI" style={{width:50,textAlign:'center'}} />
        <div text="HP" dataIndex="HP" style={{width:50,textAlign:'center'}} />
        <div text="DEX" dataIndex="DEX" style={{width:50,textAlign:'center'}} />
        <div text="INT" dataIndex="INT" style={{width:50,textAlign:'center'}} />
        <div text="SEN" dataIndex="SEN" style={{width:50,textAlign:'center'}} />
        <div text="Armor Usable" dataIndex="ArmorUsable" />
      </Grid>
    </Container>
  }
}