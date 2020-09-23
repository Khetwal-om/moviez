import React from 'react'
import './App.css'
import MovieList from './components/MovieList'
import SideBar from './components/SideBar'
import Trending from './components/Trending'

function App() {
    return (
        <div className="app">
            <SideBar />
            <MovieList />
            <Trending/>
        </div>
    )
}

export default App
