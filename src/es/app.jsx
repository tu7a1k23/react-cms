import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routes from './routes/routes';
import $ from 'jquery';
import AppConfig from './common/config';
import Utils from './common/utils';

global.jQuery = require('jquery');
global.Tether = require('tether');

$(document).ajaxError((e, jqxhr, settings) => {
  if (jqxhr.responseText) {
    try {
      const response = JSON.parse(jqxhr.responseText);
      console.error(response.message);
    } catch (e) {
      console.error(jqxhr.responseText);
    }
  }
});

$(async () => {
  const initialConfiguration = await $.ajax({
      url: '/api/init',
      type: 'GET',
      contentType: 'application/json; charset=utf-8'
  });
  AppConfig.init(initialConfiguration);
  render(<Routes />, document.getElementById('react-root'));
});
