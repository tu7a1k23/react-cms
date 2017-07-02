import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import CommonService from './services/common';
import Viewport from './components/viewport/viewport';
import Dashboard from './components/dashboard/dashboard';
import Search from './components/search/search';
import CardCreate from './components/card/card-create';
import CardDetail from './components/card/card-detail';
import NotFound from './components/notfound/notfound';

Rext.launch(<Viewport />);