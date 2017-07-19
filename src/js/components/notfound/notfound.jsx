import React from 'react';
import { Route, Component, Container } from 'ext-react';

@Route('*')
@Component({
  view: ({ $view }) => <Container className="panel-body"><h1>{$view.title}</h1></Container>
})
export default class {
  constructor() {
    this.title = 'Not Found';
  }
}