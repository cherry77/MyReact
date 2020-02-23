import React from 'react'

const Select = ({name, label, error, options, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select {...rest} id={name} name={name} className="form-control">
                {options.map(option =>
                    <option value={option['_id']} key={option['_id']}>
                        {option['name']}
                    </option>
                )}

            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
};

export default Select;