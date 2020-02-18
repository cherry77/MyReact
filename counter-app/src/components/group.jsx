import React, {Component} from 'react'
import {getGenres} from './../services/fakeGenreService'

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        }
    }
    componentDidMount () {
        this.setState({
            genres: getGenres()
        })
    }
    render() {
        const {genres} = this.state;
        const {onGroupChange} = this.props;
        return (
            <div className="list-group">
                <button type="button"
                        className="list-group-item list-group-item-action active"
                        onClick={()=>onGroupChange(0)}
                >All genres</button>
                {genres.map(item => (
                    <button type="button"
                            className="list-group-item list-group-item-action"
                            key={item._id}
                            onClick={()=>onGroupChange(item._id)}
                    >{item.name}</button>
                ))}
            </div>
        )
    }
}

export default Group
