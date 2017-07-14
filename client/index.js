/* PACKAGES */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-102511240-1');

function fireTracking() {
  ReactGA.pageview(window.location.hash);
}

/* COMPONENTS */
import App from './App';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Login from './components/Login/Login';

/* ROUTES */
ReactDOM.render (
  <Router onUpdate={fireTracking} history={hashHistory}>
    <Route component={App}>
      <Route path="/admin" component={Login} />
      <Route path="/" component={Work} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
  , document.getElementById('root')
);
