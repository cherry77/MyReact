import React, {Component, Fragment} from 'react';
import Counter from './counter'

class Counters extends Component {
    render() {
        return (
            <Fragment>
                <button className="btn btn-primary btn-sm m-2"
                        onClick={() => this.props.onReset()}>Reset</button>
                {
                    this.props.counters.map((counter, index) => (
                            <Counter key={index}
                                     counter={counter}
                                     onIncrement={() => this.props.onIncrement(counter)}
                                     onDelete={() => this.props.onDelete(counter.id)}/>
                        )
                    )}
            </Fragment>

        )
    }
}

export default Counters
