import React, { Component } from 'react'

import './SideBar.css'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
// import BrushIcon from '@material-ui/icons/Brush';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { fetchMyMovie } from '../actions';
const API_KEY="66985d7ca06f85297148a6ea70d9ea67"

const ComedyMovies=`/discover/movie?api_key=${API_KEY}&with_genres=27`;
const HorrorMovies= `/discover/movie?api_key=${API_KEY}&with_genres=878`;
const RomanceMovies= `/discover/movie?api_key=${API_KEY}&with_genres=9648`;
const Mystery= `/discover/movie?api_key=${API_KEY}&with_genres=16`;





class SideBar extends Component {
    render() {
        return (
                
                <div class="sidebar">
                    <AllInclusiveIcon classList="logo" />
                    <Button  className="sidebarbutton"
                        onClick={()=>   
                            this.props.fetchMyMovie(ComedyMovies)}
                    >
                        <BubbleChartIcon /> trending
                    </Button>
                    <Button 
                              onClick={()=>   
                                this.props.fetchMyMovie(RomanceMovies)}
                                className="sidebarbutton"
                     
                    >
                        <ChangeHistoryIcon /> rated
                    </Button>
                    <Button  className="sidebarbutton"
                        onClick={()=>  this.props.fetchMyMovie(Mystery)}
                    >
                        <BubbleChartIcon /> comedy
                    </Button>
                    <Button 
                        className="sidebarbutton"
                        onClick={()=> this.props.fetchMyMovie(HorrorMovies)}
                    >
                        <AllInclusiveIcon /> romance
                    </Button>
                    <Button  className="sidebarbutton"
                        onClick={()=>   
                            this.props.fetchMyMovie(ComedyMovies)}
                    >
                        <BubbleChartIcon /> trending
                    </Button>
                    <Button 
                              onClick={()=>   
                                this.props.fetchMyMovie(RomanceMovies)}
                                className="sidebarbutton"
                     
                    >
                        <ChangeHistoryIcon /> rated
                    </Button>            

                </div>
        )
    }
}


const mapStateToProps=state=> {
    return {movies:state}
}


export default connect(mapStateToProps,{fetchMyMovie})(SideBar)

