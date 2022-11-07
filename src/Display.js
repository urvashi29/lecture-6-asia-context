import React from "react";

const Display = ({ movieData }) => {

    const movieList = movieData.length ? (movieData.map(movie => movie.name)) : ('No post yet')
    
    return (
        <>
            {movieList}
        </>
    )
}

export default Display