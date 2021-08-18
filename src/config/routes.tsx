import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

/**
 * Add Components
 */

import { HomeComponent, QuizComponent } from '../pages';

/**
 * Add App Routes
 */

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home">
        <HomeComponent />
      </Route>

      <Route exact path="/quiz">
        <QuizComponent />
      </Route>

      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  </BrowserRouter>
);
