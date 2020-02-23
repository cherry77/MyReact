import React, {Component} from 'react'
import Input from './common/input'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {username: '', password: ''},
            errors: {}
        }
    }
    validateProperty = ({name, value}) => {
        if(name === 'username'){
            if(value.trim() === '')
                return 'Username is required.';
        }
        if(name === 'password'){
            if(value.trim() === '')
                return 'Password is required.';
        }
    };
    validate = () => {
        const errors = {};
        const {account} = this.state;

        if(account.username.trim() === '')
            errors.username = 'Username is required.';
        if(account.password.trim() === '')
            errors.password = 'Password is required.';
        return errors;
    };
    handleChange = ({currentTarget: input}) => {
        //validate property
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);

        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    };

    handleSubmit = e => {
        e.preventDefault();
        const account = {...this.state.account};
        const errors = this.validate();
        this.setState({errors});
        if(errors) return;
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
