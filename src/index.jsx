import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import App from './App';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/css/uikit-core.min.css';
import 'uikit/dist/js/uikit.min.js';
import './index.scss';

smoothScrollPolyfill.polyfill();

render((
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
), document.getElementById('root'));
