import React, {Component} from 'react'
import {getMovies} from './../services/fakeMovieService'
import {getGenres} from './../services/fakeGenreService'
import ListGroup from './common/listgroup'
import Pagination from "./common/pagination"
import {paginate} from './../utils/pagination'
import MoviesTable from './moviesTable'
import _ from 'lodash'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            selectedGenre: {},
            pageSize: 4,
            currentPage: 1,
            sortColumn: {path: 'title', order: 'asc'}
        }
    }

    componentDidMount() {
        //增加all genre组
        const genres = [{_id: '', name: 'All genres'}, ...getGenres()];
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

    handleSort = sortColumn => {
        this.setState({sortColumn})
    };

    render() {
        const {length: count} = this.state.movies;
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            sortColumn
        } = this.state;
        if (count === 0) return <h3>There are no movies in the database.</h3>
        // 筛选
        const filtered = selectedGenre && selectedGenre._id?
            allMovies.filter(m => m.genre._id === selectedGenre._id):
            allMovies;
        //排序
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        //分页
        const movies = paginate(sorted, currentPage, pageSize);
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
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}/>
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
