


const fetchMovie = (initialState=[],action)=>{
    if(action.type==='FETCH_MOVIE'){
        return action.payload
    }
    return initialState
}
export default fetchMovie






// import { combineReducers} from 'redux'
// import movieComedy from './movieComedy'
// import movieRomantic from './movieRomantic'
// import movieTrending from './movieTrending'


// import postsReducer from './postsReducer'
// import usersReducer from './usersReducer'

// export default combineReducers({
//     comedy: movieTrending,
//     rated: movieComedy,
//     trending: movieTrending,
//     romantic:movieRomantic
// })

