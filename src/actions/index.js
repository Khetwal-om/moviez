import apicall from '../apis/apicall'

// const API_KEY="66985d7ca06f85297148a6ea70d9ea67"

// const Trending=`/trending/all/week?api_key=${API_KEY}&language=en-US`;
// const TopRated=`/discover/movie?api_key=${API_KEY}&with_genres=28`;
// const ActionMovies=`/discover/movie?api_key=${API_KEY}&with_genres=10749`;
// const ComedyMovies= `/discover/movie?api_key=${API_KEY}&with_genres=27`;
// const HorrorMovies= `/discover/movie?api_key=${API_KEY}&with_genres=878`;
// const RomanceMovies= `/discover/movie?api_key=${API_KEY}&with_genres=9648`;
// const Mystery= `/discover/movie?api_key=${API_KEY}&with_genres=16`;
// const SciFi= `/discover/movie?api_key=${API_KEY}&with_genres=37`;
// const Western= `/discover/movie?api_key=${API_KEY}&with_genres=16`;
// const Animation=`/discover/movie?api_key=${API_KEY}&with_genres=10770`;
// const TV=`/discover/movie?api_key=${API_KEY}&with_genres=10770`;

export const fetchMyMovie = (genre)=> async dispatch => {
        const response=await apicall.get(genre)
        console.log(response)
        console.log(response.data.results)

        dispatch({type: 'FETCH_MOVIE',payload: response.data.results})
    
}

// export const fetchRated = ()=> async dispatch => {
//         const response=await apicall.get(TopRated)
//         console.log(response)
//         console.log(response.data.results)

//         dispatch({type: 'FETCH_TOPRATED',payload: response.data.results})
    
// }
// export const fetchActionMovie = ()=> async dispatch => {
//         const response=await apicall.get(ActionMovies)
//         console.log(response.data.results)
//         dispatch({type: 'FETCH_ACTION',payload: response.data.results})
    
// }

// export const fetchRomance = ()=> async dispatch => {
//         const response=await apicall.get(RomanceMovies)
//         console.log(response)
//         console.log(response.data.results)

//         dispatch({type: 'FETCH_ROMANCE',payload: response.data.results})
    
// }
// export const fetchComedy = ()=> async dispatch => {
//         const response=await apicall.get(ComedyMovies)
//         console.log(response)
//         console.log(response.data.results)

//         dispatch({type: 'FETCH_COMEDY',payload: response.data.results})
    
// }
