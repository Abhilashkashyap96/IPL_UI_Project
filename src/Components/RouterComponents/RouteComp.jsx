import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLogin from '../LoginPages/AdminLogin'
import UserLogin from '../LoginPages/UserLogin'

function RouteComp() {
  return (
    <Router>
        <Switch>
        <Route path='/user-login' component={UserLogin} />
        <Route path='/admin-login' component={AdminLogin} />
        </Switch>
    </Router>
  )
}

export default RouteComp