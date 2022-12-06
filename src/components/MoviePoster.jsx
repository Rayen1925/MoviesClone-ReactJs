import React from 'react'
import '../assets/css/movieposter.css'

function MoviePoster({movie}) {


    

    return (
        <div class="container">
            
            <img onClick={()=> window.location.href = '/movie/'+movie.id} src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
           
        </div>
    )
}


export default MoviePoster
