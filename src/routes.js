import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import BooksDashboard from './components/books/BooksDashboard'


export default (
  <Switch>
    <Route path='/books' component={BooksDashboard} />
    <Route path='/' component={Landing} />
  </Switch>
)