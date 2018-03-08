import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Viewport from './components/viewport/viewport';

render(<Viewport />, document.getElementById('react-root'));
