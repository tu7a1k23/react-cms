import 'babel-polyfill';
import React from 'react';
import Rext from 'ext-react';
import CommonService from './services/common';
import Viewport from './components/viewport/viewport';
import Card from './components/card/card';
import NotFound from './components/notfound/notfound';

Rext.launch(<Viewport />);