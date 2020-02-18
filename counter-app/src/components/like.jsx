import React, {Component} from 'react'

class Like extends Component {
    render() {
        let classes = 'fa fa-heart';
        if(!this.props.liked) classes+= '-o';
        return (
            <React.Fragment>
                <i className={classes}
                      onClick={this.props.onClick}></i>
            </React.Fragment>
        )
    }
}

export default Like
