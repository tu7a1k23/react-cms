import React, { Component } from 'react';
import { withProps, Field, Button } from 'ext-react';
import CardTypeStore from '~/stores/card-type';

export default class extends Component {
  @withProps
  render({ searchForm }) {
    return <section className="form-group form-inline">
      <Field className="mr-sm" />
      <Button className="primary mr-sm" text="Search" onClick={searchForm.search} />
    </section>;
  }
}