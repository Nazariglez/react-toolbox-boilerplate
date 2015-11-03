import React from 'react';
import {Router, Route} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import MyApp from './components/MyApp.jsx';
import TestOne from './components/TestOne.jsx';
import TestTwo from './components/TestTwo.jsx';

const history = createHashHistory();

const routes = (
  <Router history={history}>
    <Route path="/" component={MyApp}>
      <Route path="test1" component={TestOne}/>
      <Route path="test2" component={TestTwo}/>
    </Route>
  </Router>
);

export default routes;