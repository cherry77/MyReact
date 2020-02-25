import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {getMovies, deleteMovie} from './../../services/movieService'
import {getGenres} from './../../services/genreService'
import ListGroup from './../common/listgroup'
import SearchBox from './../common/searchBox'
import Pagination from "./../common/pagination"
import {paginate} from './../../utils/pagination'
import MoviesTable from './moviesTable'
import _ from 'lodash'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            searchQuery: '',
            selectedGenre: {},
            pageSize: 4,
            currentPage: 1,
            sortColumn: {path: 'title', order: 'asc'},
        }
    }

    async componentDidMount() {
        const {data} = await getGenres();
        //增加all genre组
        const genres = [{_id: '', name: 'All genres'}, ...data];

        const {data: movies} = await getMovies();
        this.setState({movies, genres})
    }

    handleDelete = async movie => {

        const originalMovies = this.state.movies;

        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({movies});
        try{
            await deleteMovie(movie._id)
        }catch(ex){
            if(ex.response && ex.response.status === 404)
                toast.error("This movie has already been delete.");

            this.setState({movies: originalMovies});
        }


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
        this.setState({selectedGenre: genre, searchQuery: '', currentPage: 1})
    };

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: {}, currentPage: 1});
    };

    handleSort = sortColumn => {
        this.setState({sortColumn})
    };

    getPageData = () => {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            sortColumn,
            searchQuery
        } = this.state;
        // 筛选
        let filtered = allMovies;
        // 关键字搜索筛选
        if(searchQuery)
            filtered = allMovies.filter(m =>
                m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        else if(selectedGenre && selectedGenre._id) //分类筛选
            filtered = allMovies.filter(m =>
                m.genre._id === selectedGenre._id);

        //排序
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        //分页
        const movies = paginate(sorted, currentPage, pageSize);
        return {totalCount: filtered.length, data: movies}
    };

    render() {
        const {length: count} = this.state.movies;
        if (count === 0) return <h3>There are no movies in the database.</h3>

        const {pageSize, currentPage, sortColumn, searchQuery} = this.state;
        const {totalCount, data: movies} = this.getPageData();

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}/>
                </div>
                <div className="col">
                    <Link className="btn btn-primary" to="/movies/new">New movie</Link>
                    <h5>There are {totalCount} movies in the database.</h5>
                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}/>
                    <Pagination
                        itemCounts={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}/>
                </div>
            </div>
        )
    }
}

export default Movies
