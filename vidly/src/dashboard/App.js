import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ResetPassword from './pages/auth/resetPassword'
import Admin from './pages/admin/index'

class App extends Component{
    render () {
        return(
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/resetPassword" component={ResetPassword}/>
                <Route path="/dashboard" component={Admin}/>
            </Switch>
        )
    }
}

export default App;
