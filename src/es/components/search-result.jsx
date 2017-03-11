import React, { Component } from 'react';
import { BootGrid } from './ux/bootstrap';

export default class SearchResult extends Component {
  render() {
    const { data } = this.props;
    return <section className="flex">
      <BootGrid data={data}>
        <div header="ID" style={{ width: '50px' }} dataIndex="id" />
        <div header="Name" style={{ width: '150px' }} dataIndex="name" />
        <div header="Status" style={{ width: '100px' }} dataIndex="status" />
        <div header="Division" style={{ width: '350px' }} dataIndex="division" />
        <div header="Activity" style={{ width: '350px' }} dataIndex="activity" />
        <div header="Product" style={{ width: '350px' }} dataIndex="product" />
        <div header="Description" style={{ width: '800px' }} dataIndex="desc" />
        <div header="Actions" style={{ width: '150px' }} />
      </BootGrid>
    </section>;
  }
}