import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Admin from './pages/admin/index'

class App extends Component{
    render () {
        return(
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Admin}/>
            </Switch>
        )
    }
}

export default App;
