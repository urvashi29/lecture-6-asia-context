import React, { useContext } from "react";
import { MovieContext } from "./MovieProvider";

const MovieCount = () => {
    const movieCount = useContext(MovieContext);

    return (
        <>
            Movie Count: {movieCount.length}
        </>
    )
}
export default MovieCount;