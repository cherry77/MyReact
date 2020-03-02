import React, {Component} from 'react'
import Joi from 'joi-browser'
import Form from "../../components/common/form";


class Register extends Form{
    constructor(props) {
        super(props);
        this.state = {
            data: {name: '', company: '', email: '', password: ''},
            errors: {}
        }
    }

    schema = {
        name: Joi.string().required().label('Username'),
        company: Joi.string().required().label('Company'),
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        console.log('Submitted')
    };

    render() {
        return (
            <div className="main register h-100 w-100">
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
                                            <form onSubmit={this.handleSubmit}>
                                                {this.renderInput("name", "Name")}
                                                {this.renderInput("company", "Company")}
                                                {this.renderInput("email", "Email")}
                                                {this.renderInput("password", "Password")}
                                                {this.renderButton("Sign up")}
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
