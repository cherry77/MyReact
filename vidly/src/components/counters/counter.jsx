import React, {Component, Fragment} from 'react'

class Counter extends Component {
    formatCount = () => {
        return this.props.counter.value ? this.props.counter.value : 'Zero';
    };
    getBadgeClasses = () => {
        // console.log(typeof this.props.counter.value);
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0? 'warning': 'primary';
        // console.log(classes);
        return classes;
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-sm btn-secondary m-2"
                        onClick={() => this.props.onIncrement()}>Increment
                </button>
                <button className="btn btn-sm btn-danger m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>

        )
    }
}

export default Counter
