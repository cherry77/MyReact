import React, {Component} from 'react'
import Input from './common/input'
import Joi from 'joi-browser'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {username: '', password: ''},
            errors: {}
        }
    }

    //定义schema
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj,schema);
        return error ? error.details[0].message: null;
    };
    validate = () => {
        const option = {abortEarly: false};
        const {error} = Joi.validate(this.state.account, this.schema, option);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;

    };
    handleChange = ({currentTarget: input}) => {
        //validate property
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    };

    handleSubmit = e => {
        e.preventDefault();
        const account = {...this.state.account};
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
    };

    render() {
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form action="">
                    <Input name="username"
                           label="Username"
                           value={account.username}
                           error={errors.username}
                           onChange={this.handleChange}/>
                    <Input name="password"
                           label="Password"
                           value={account.password}
                           error={errors.password}
                           onChange={this.handleChange}/>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm
