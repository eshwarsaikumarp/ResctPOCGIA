import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../container/LandingPage";
import Dashboard from "../container/Dashboard";
import CounterWidget from "../container/CounterWidget";
import LoginPage from "../container/LoginPage";

import { ApolloProvider } from 'react-apollo';
import client from '../apollo';

export const routing = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/counterwidget" component={CounterWidget} />
        <Route path="/login" component={LoginPage} />
      </Router>
    </Provider>
  </ApolloProvider>
);
