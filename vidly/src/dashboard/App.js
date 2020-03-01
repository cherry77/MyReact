import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Sidebar from './components/common/sidebar'
import Navbar from './components/navbar'
import Dashboard from './pages/dashboard'
import './App.css'
import LoginForm from "../components/movies/loginForm";

class App extends Component{
    state = {
        toggled: true
    };
    toggleSidebar = () => {
        this.setState({toggled: !this.state.toggled})
    };
    render () {
        return(
            <div className="app-wrapper">
                <Sidebar toggled={this.state.toggled}/>
                <div className="main">
                    <Navbar toggleSidebar={this.toggleSidebar}/>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard}/>
                    </Switch>

                </div>
            </div>
        )
    }
}

export default App;
