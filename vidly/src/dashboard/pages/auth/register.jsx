import React, {Component} from 'react'

class Register extends Component{
    render() {
        return (
            <div className="main h-100 w-100">
                <div className="h-100 container">
                    <div className="h-100 row">
                        <div className="mx-auto d-table h-100 col-sm-10 col-md-8 col-lg-6">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-5">
                                    <h1 className="h3">Get started</h1>
                                    <p className="lead">Start creating the best possible user experience for you
                                    customers.</p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form className="">
                                                <div className="form-group">
                                                    <label className="">Name</label>
                                                    <input name="name" placeholder="Enter your name" type="text"
                                                    className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="">Company</label>
                                                    <input name="company" placeholder="Enter your company name" type="text"
                                                    className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="">Email</label>
                                                    <input name="email" placeholder="Enter your email" type="email"
                                                    className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="">Password</label>
                                                    <input name="password" placeholder="Enter password" type="password"
                                                    className="form-control"/>
                                                </div>
                                                <div className="text-right mt-3">
                                                    <a href="/dashboard">
                                                        <button className="btn btn-primary">Sign up</button>
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
    }
    export default Register
