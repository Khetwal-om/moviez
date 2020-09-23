import React from 'react'
import './MovieDetail.css'

import FavoriteIcon from '@material-ui/icons/Favorite';



const base_url="https://image.tmdb.org/t/p/original/";

function MovieDetail({title,original_name,backdrop_path,poster_path,vote_count,release_date}) {
    return (
        <div className="moviedetail">
            
            <div className="moviedetail__image">
                <img src={`${base_url}${backdrop_path||poster_path}`} alt=""/>
            </div>
            <div className="moviedetail__title">
                {title ||original_name}  <FavoriteIcon />    <span> {release_date} </span>
            </div>
            <div className="moviedetail__description">
                {vote_count}    <FavoriteIcon />
            </div>
        </div>
    )
}

export default MovieDetail
