import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};

export default Movies;
