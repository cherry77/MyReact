import React, {Component} from 'react'

class ResetPassword extends Component{
    render () {
        return (
            <div className="main h-100 w-100">
                <div className="h-100 container">
                    <div className="h-100 row">
                        <div className="mx-auto d-table h-100 col-sm-10 col-md-8 col-lg-6">
                            <div className="d-table-cell align-middle">
                                <div className="text-center mt-5">
                                    <h1 className="h3">Reset password</h1>
                                    <p className="lead">Enter your email to reset your password.</p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="m-sm-4">
                                            <form className="">
                                                <div className="form-group">
                                                    <label className="">Email</label>
                                                    <input name="email" placeholder="Enter your email" type="email"
                                                    className="form-control"/></div>
                                                <div className="text-right mt-3">
                                                    <a href="/dashboard">
                                                        <button className="btn btn-primary">Reset password</button>
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
export default ResetPassword
