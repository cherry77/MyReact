import React, {Component} from 'react'

class Login extends Component{
    render() {
        return (
            <div className="main login h-100 w-100">
                <div className="h-100 container">
                    <div className="h-100 row">
                        <div className="mx-auto d-table h-100 col-sm-10 col-md-8 col-lg-6">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-5">
                                    <h1 className="h3">Welcome back,Linda</h1>
                                    <p className="lead">Sign in to your account to continue</p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <div className="text-center">
                                                <img src="/logo192.png" alt="Linda Miller"
                                                     className="img-fluid rounded-circle" width="132" height="132"/>
                                            </div>
                                            <form className="">
                                                <div className="form-group">
                                                    <label className="">Email</label>
                                                    <input name="email" placeholder="Enter your email" type="email"
                                                    className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="">Password</label>
                                                    <input name="password" placeholder="Enter your password" type="password"
                                                    className="form-control"/>
                                                    <small><a href="/auth/reset-password">Forgot password?</a></small>
                                                </div>
                                                <div>
                                                    <div className="custom-checkbox custom-control">
                                                        <input type="checkbox" id="rememberMe" className="custom-control-input"
                                                        checked/>
                                                        <label className="custom-control-label" htmlFor="rememberMe">
                                                            Remember me next time
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="text-right mt-3">
                                                    <a href="/dashboard">
                                                        <button className="btn btn-primary">Sign in</button>
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
export default Login
