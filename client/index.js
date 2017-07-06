/* PACKAGES */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

/* COMPONENTS */
import App from './App';
import Login from './components/Login/Login';
import IsJake from './components/IsJake/IsJake';
import Edit from './components/Edit/Edit';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

/* ROUTES */
ReactDOM.render (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route component={IsJake}>
        <Route path="/admin/edit" component={Edit} />
      </Route>
      <Route path="/admin" component={Login} />
      <Route path="/" component={Work} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
  , document.getElementById('root')
);
