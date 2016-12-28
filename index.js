import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from './modules/Home'
import App from './modules/App'
import Boys from './modules/Boys'
import Girls from './modules/Girls'
import Boy from './modules/Boy'
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
	  <IndexRoute component={Home}/>
      <Route path="/boys" component={Boys}>
		<Route path="/boys/:boyName" component={Boy}/>
	  </Route>
      <Route path="/girls" component={Girls}/>
    </Route>
  </Router>
), document.getElementById('app'))