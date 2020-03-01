import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import ProtectedRoute from './components/common/protectedRoute'
import MNavBar from './components/movies/mnavbar'
import Movies from './components/movies/movies'
import MovieForm from './components/movies/movieForm'
import Customers from './components/movies/customers'
import Rentals from './components/movies/rentals'
import NotFound from './components/not-found'
import LoginForm from "./components/movies/loginForm";
import RegisterForm from "./components/movies/registerForm";
import Logout from "./components/movies/logout";
import auth from './services/authService'
import 'react-toastify/dist/ReactToastify.css'

class MovieApp extends Component{
    state = {};
    componentDidMount () {
        const user = auth.getCurrentUser();
        this.setState({user});
    }
    render () {
        return (
            <React.Fragment>
                <ToastContainer/>
                <MNavBar user={this.state.user}/>
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/register" component={RegisterForm}/>
                        <Route path="/logout" component={Logout}/>
                        <ProtectedRoute path="/movies/:id" component={MovieForm}/>
                        <Route
                            path="/movies"
                            render={props => <Movies {...props} user={this.state.user}/>}/>
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
export default MovieApp
