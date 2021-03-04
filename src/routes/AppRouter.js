import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
import { DataScreen } from '../components/DataScreen';
import { LoginScreen } from '../components/LoginScreen';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    return (
        <Router>
      <div className="background-image">
        <Switch>
          <PrivateRoutes
            component={DataScreen}
             exact path="/account/data"
          />
          <Route exact path="/account/login" component={LoginScreen} />

          <Redirect to="/account/login" />
        </Switch>
      </div>
    </Router>
    )
}
