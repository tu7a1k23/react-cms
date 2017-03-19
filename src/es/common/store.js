import React, { Component } from 'react';
import Map from './map';
import Utils from './utils';

const store = (config) => (WrappedComponent) => class extends Component {
  constructor(props) {
    props.relay = {};
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    const { relay } = this.props;
    Map.of(config.mutations).each((name, mutator) => {
      relay[name] = options => this.commitUpdate(mutator, options);
    });
  }

  async componentDidMount() {
    let { endpoint } = config;
    if (!endpoint) {
      return;
    }
    const params = endpoint.initialVariables ? endpoint.initialVariables() : null;
    endpoint = endpoint.name || endpoint;
    let data = await Utils.ajaxRequest(endpoint, 'GET', params);
    let { resolve } = config;
    if (resolve) {
      data = resolve(data);
    }
    this.setState(() => ({ data }));
  }

  async commitUpdate(mutator, options) {
    const endpoint = options.path || mutator.path;
    const response = await Utils.ajaxRequest(endpoint, mutator.type, options.record);
    if (response && options.success) {
      options.success(response);
    } else if (options.failure) {
      options.failure();
    }
  }

  render() {
    const { data } = this.state;
    return data ? <WrappedComponent {...this.props} data={data} /> : null;
  }
}

export default store;