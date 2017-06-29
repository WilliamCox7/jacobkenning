/* PACKAGES */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

/* COMPONENTS */
import App from './App.js';

/* ROUTES */
ReactDOM.render (
  <Router history={hashHistory}>
    <Route component={App}>
      
    </Route>
  </Router>
  , document.getElementById('root')
);
