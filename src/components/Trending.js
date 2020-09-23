import React, { Component } from 'react'

import './Trending.css'
import axios from 'axios'


const API_KEY="66985d7ca06f85297148a6ea70d9ea67"
const base_url="https://image.tmdb.org/t/p/original/";


// 
class Trending extends Component {
    state={
        upcoming: []
    }
    async componentDidMount() {
        const response=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        this.setState({
            upcoming: response.data.results
        })
    }
    render() {
        return (
            <div className="trending">

                {
                    this.state.upcoming.map(trend=> (
                        <div className="trend">
                           <img src={`${base_url}${trend.backdrop_path||trend.poster_path}`} alt=""/>
                           <h3> {trend.title || trend.original_name} </h3>
                           <p>{trend.vote_count} </p>  
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Trending
