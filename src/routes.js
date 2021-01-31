import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import BooksDashboard from './components/books/BooksDashboard'


export default (
  <Switch>
    <Route path='/reading' component={BooksDashboard} />
    <Route path='/' component={Landing} />
  </Switch>
)