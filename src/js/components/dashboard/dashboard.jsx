import React from 'react';
import { Route, Component, Container } from 'ext-react';

@Route('/')
@Component({
  view: ({ vm }) => <Container className="panel-body"><h1>{vm.title}</h1></Container>
})
export default class {
  constructor() {
    this.title = 'Dashboard';
  }
}