import './MovieList.css'

import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchMyMovie} from '../actions'
import MovieDetail from './MovieDetail'
const API_KEY="66985d7ca06f85297148a6ea70d9ea67"

const Trending=`/trending/all/week?api_key=${API_KEY}&language=en-US`;
// const TopRated=`/discover/movie?api_key=${API_KEY}&with_genres=28`;
// const ActionMovies=`/discover/movie?api_key=${API_KEY}&with_genres=10749`;
// const ComedyMovies= `/discover/movie?api_key=${API_KEY}&with_genres=27`;
// const HorrorMovies= `/discover/movie?api_key=${API_KEY}&with_genres=878`;
// const RomanceMovies= `/discover/movie?api_key=${API_KEY}&with_genres=9648`;



class MovieList extends Component {
    componentDidMount(){
        this.props.fetchMyMovie(Trending)
    }
    renderMovie(){
        return this.props.movies.map(({id,...otherMovieProps})=>
            <MovieDetail key={id} {...otherMovieProps}/>
        )
    }
    render() {
        return (
        
           <div className="movielist">
             <div> </div>
            {this.renderMovie()}
           </div>
            
        )
    }
}



const mapStateToProps=state=> {

    return {movies:state}
}


export default connect(mapStateToProps,{fetchMyMovie})(MovieList)
