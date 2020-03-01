import React, {Component} from 'react'
import Sidebar from './components/common/sidebar'
import Navbar from './components/navbar'
import './App.css'

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
                </div>
            </div>

        )
    }
}

export default App;
