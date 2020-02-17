import React, {Component, Fragment} from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        // counters[0].value ++;//这样也可以改变state里的值，我们需要在现有的这个位置克隆一遍
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };
    handleDelete = id => {
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({
            counters
        })
    };
    handleReset = () => {
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        });
        this.setState({
            counters
        })
    };

    render() {
        return (
            <Fragment>
                <button className="btn btn-primary btn-sm m-2"
                        onClick={() => this.handleReset()}>Reset</button>
                {
                    this.state.counters.map((counter, index) => (
                            <Counter key={index}
                                     counter={counter}
                                     onIncrement={() => this.handleIncrement(counter)}
                                     onDelete={() => this.handleDelete(counter.id)}/>
                        )
                    )}
            </Fragment>

        )
    }
}

export default Counters
