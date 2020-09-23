import React, { Component } from 'react'

import './SideBar.css'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { fetchMyMovie } from '../actions';
const API_KEY="66985d7ca06f85297148a6ea70d9ea67"

// const HorrorMovies=`/discover/movie?api_key=${API_KEY}&with_genres=27`;
const ComedyMovies= `/discover/movie?api_key=${API_KEY}&with_genres=35`;
const RomanceMovies= `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const Animation= `/discover/movie?api_key=${API_KEY}&with_genres=16`;
// const Trending=`/trending/all/week?api_key=${API_KEY}&language=en-US`;
// const TopRated=`/movie/top_rated?api_key=${API_KEY}&language=en-US`;
const ActionMovies=`/discover/movie?api_key=${API_KEY}&with_genres=28`;
const SciFi= `/discover/movie?api_key=${API_KEY}&with_genres=878`;
// const Western= `/discover/movie?api_key=${API_KEY}&with_genres=16`;
// const Mystery=`/discover/movie?api_key=${API_KEY}&with_genres=9648`;
const TV=`/discover/movie?api_key=${API_KEY}&with_genres=10770`;

        // <div className="testingonwaters">
         /* <div className="crux">
             <img src={require('../src/images/movie.png')} />
             <h4>MOVIEZ</h4>
         </div> */
        // </div>




class SideBar extends Component {
    render() {
        return (    
                
                <div className="sidebar">
                   <div className="logo">
                     <img src={require('../images/movie.png')} /> <h1>Moviez</h1>
                   </div>
           
                    <Button  className="sidebarbutton"
                        onClick={()=>   
                            this.props.fetchMyMovie(ActionMovies)}
                    >
                        <BubbleChartIcon /> Action
                    </Button>
                    <Button 
                              onClick={()=>   
                                this.props.fetchMyMovie(RomanceMovies)}
                                className="sidebarbutton"
                     
                    >
                        <ChangeHistoryIcon /> Romance
                    </Button>
                    <Button  className="sidebarbutton"
                        onClick={()=>  this.props.fetchMyMovie(ComedyMovies)}
                    >
                        <BubbleChartIcon /> Comedy
                    </Button>
                    <Button 
                        className="sidebarbutton"
                        onClick={()=> this.props.fetchMyMovie(SciFi)}
                    >
                        <AllInclusiveIcon /> SciFi
                    </Button>
                    <Button  className="sidebarbutton"
                        onClick={()=>   
                            this.props.fetchMyMovie(TV)}
                    >
                        <BubbleChartIcon /> TV
                    </Button> 
                    <Button 
                              onClick={()=>   
                                this.props.fetchMyMovie(Animation)}
                                className="sidebarbutton"
                     
                    >
                        <ChangeHistoryIcon /> Animation
                    </Button>             

                </div>
        )
    }
}


const mapStateToProps=state=> {
    return {movies:state}
}


export default connect(mapStateToProps,{fetchMyMovie})(SideBar)

