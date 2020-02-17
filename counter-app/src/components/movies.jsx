import React, {Component} from 'react'
import {getMovies} from './../services/fakeMovieService'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        const movies = getMovies();
        this.setState({
            movies
        })
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    };

    render() {
        const {length: count} = this.state.movies;
        if(count === 0) return <h3>There are no movies in the database.</h3>
        return (
            <React.Fragment>
                <h3>There are {count} movies in the database.</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button className="btn btn-danger"
                                        onClick={() => this.handleDelete(movie)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default Movies
