import React, { Component } from 'react'
import Rext from 'ext-react'
import { findDOMNode } from 'react-dom'
import c3 from 'c3'

export default class Viz extends Component {
  componentDidMount() {
    this.renderChart(this.props.config)
  }

  componentWillReceiveProps(nextProps) {
    this.renderChart(nextProps.config)
  }

  renderChart(config) {
    config = Rext.extend({}, config, {
      bindto: findDOMNode(this)
    })
    c3.generate(config)
  }

  render() {
    return <section />;
  }
}