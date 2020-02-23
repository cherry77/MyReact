import React, {Component} from 'react'
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {}
        }
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj,schema);
        return error ? error.details[0].message: null;
    };
    validate = () => {
        const option = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, option);
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

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {...this.state.data};
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit();
    };

    renderButton = label => {
        return (
            <button className="btn btn-primary"
                    disabled={this.validate()}>{label}</button>
        )
    };

    renderInput = (name, label, type = 'text') => {
        const {data, errors} = this.state;
        return (
            <Input type={type}
                   name={name}
                   label={label}
                   value={data[name]}
                   error={errors[name]}
                   onChange={this.handleChange}/>
        )
    }
}
export default Form
