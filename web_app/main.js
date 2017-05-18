import ReactDOM from 'react-dom';
import React from 'react';

import Home from './components/Home';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={Home}  />
  </Router>),
  document.getElementById('content')
);
