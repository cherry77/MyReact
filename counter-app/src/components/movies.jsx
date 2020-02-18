import React, {Component} from 'react'
import {getMovies} from './../services/fakeMovieService'
import Like from './common/like'
import Pagination from "./common/pagination"
import {paginate} from './../utils/pagination'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            pageSize: 4,
            currentPage: 1
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

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies})
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    render() {
        const {length: count} = this.state.movies;
        if (count === 0) return <h3>There are no movies in the database.</h3>
        const {pageSize, currentPage, movies: allMovies} = this.state;
        const movies = paginate(allMovies, currentPage, pageSize);
        return (
            <React.Fragment>
                <div className="container">
                    <h3>There are {count} movies in the database.</h3>
                    <table className="table table-sm">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onClick={() => this.handleLike()}/></td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={() => this.handleDelete(movie)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Pagination itemCounts={count}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Movies
