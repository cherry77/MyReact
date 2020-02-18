import React, {Component} from 'react'
import {getMovies} from './../services/fakeMovieService'
import {getGenres} from './../services/fakeGenreService'
import Like from './common/like'
import ListGroup from './common/listgroup'
import Pagination from "./common/pagination"
import {paginate} from './../utils/pagination'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            selectedGenre: {},
            pageSize: 4,
            currentPage: 1
        }
    }

    componentDidMount() {
        //增加all genre组
        const genres = [{name: 'All genres'}, ...getGenres()];
        this.setState({
            movies: getMovies(),
            genres: genres
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

    handleGenreSelect = genre => {
        this.setState({selectedGenre: genre, currentPage: 1})
    };

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies, selectedGenre} = this.state;
        if (count === 0) return <h3>There are no movies in the database.</h3>

        const filtered = selectedGenre && selectedGenre._id?
            allMovies.filter(m => m.genre._id === selectedGenre._id):
            allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
                    <h3>There are {filtered.length} movies in the database.</h3>
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
                    <Pagination
                        itemCounts={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
            </div>
        )
    }
}

export default Movies
