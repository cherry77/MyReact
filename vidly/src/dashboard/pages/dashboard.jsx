import React, {Component} from 'react'

class Dashboard extends Component{
    render () {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="header">
                        <h1 className="header-title">Welcome back, Linda!</h1>
                        <nav className="" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                        <p className="header-subtitle">You have 24 new messages and 5 new notifications.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard
