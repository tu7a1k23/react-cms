import React, {Component} from 'react';
import {Container} from 'ext-react';

export default class DashboardView extends Component {
  componentDidMount() {
    this.props.$view.renderChart();
  }

  render() {
    return <Container className="panel-body">
      <h1>{this.props.$view.title}</h1>
      <div className="row">
        <div className="col-3"><div id="pie"></div></div>
        <div className="col-3"><div id="donut"></div></div>
      </div>
    </Container>
  }
}