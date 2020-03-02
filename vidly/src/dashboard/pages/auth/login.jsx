import React, {Component} from 'react'
import Input from './../../components/common/input'
import Joi from 'joi-browser'
import Form from "../../components/common/form";

class Login extends Form{
    state = {
        data: {username: '', password: ''},
        errors: {}
    };
    //定义schema
    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        console.log('Submitted')
    };

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
                                                <img src="/logo192.png"
                                                     alt="Linda Miller"
                                                     className="img-fluid rounded-circle"
                                                     width="132"
                                                     height="132"/>
                                            </div>
                                            <form onSubmit={this.handleSubmit}>
                                                {this.renderInput("username","Username")}
                                                {this.renderInput("password","Password", "password")}
                                                <small><a href="/auth/reset-password">Forgot password?</a></small>
                                                {this.renderCheckbox("Remember me next time")}
                                                {this.renderButton("Sign in")}
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
