import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import Home from '../pages/home';
import Register from '../pages/register';
import Transaction from '../pages/transaction';
import Withdrawal from './withdrawal';

function Routing() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/transaction' component={Transaction} />
        <Route exact path='/withdraw' component={Withdrawal} />
      </Switch>
    </BrowserRouter>
    )
}

export default Routing;