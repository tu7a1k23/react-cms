import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '~/layouts/layout';
import Dashboard from '~/components/dashboard';
import Search from '~/components/search';
import NotFound from '~/components/notfound';

export default class Routes extends Component {
  render() {
    return <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Dashboard} />
        <Route path="/search" component={Search} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>;
  }
}