import React, {Component} from 'react'
import Joi from 'joi-browser'
import Form from './common/form'

class LoginForm extends Form {
    constructor(props) {
        super(props);
        this.state = {
            data: {username: '', password: ''},
            errors: {}
        }
    }

    //定义schema
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    render() {
        const {data, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        )
    }
}

export default LoginForm
