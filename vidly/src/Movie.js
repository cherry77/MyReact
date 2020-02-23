import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MNavBar from './components/mnavbar'
import Movies from './components/movies'
import MovieForm from './components/movieForm'
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/not-found'
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

class Movie extends Component{
    render () {
        return (
            <React.Fragment>
                <MNavBar/>
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/register" component={RegisterForm}/>
                        <Route path="/movies/:id" component={MovieForm}/>
                        <Route path="/movies" component={Movies}/>
                        <Route path="/customers" component={Customers}/>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect from="/" exac to="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}
export default Movie
