import MovieForms from "./MovieForms";
import MovieElement from "./movieElement";
import MovieListArray from "../Moviearray";
import { useState } from "react";
import Filter from "./filter";
function MainThing() {
  const [movieListUpdated, setMovieListUpdated] = useState(MovieListArray);
  const [rate, setRate] = useState(0);

  return (
    <div>
      <MovieForms
        movieListUpdated={movieListUpdated}
        setMovieListUpdated={setMovieListUpdated}
      />
      <Filter
        movieListUpdated={movieListUpdated}
        setMovieListUpdated={setMovieListUpdated}
        RateLimit={rate}
        setRate={setRate}
      />
      <MovieElement movieListUpdated={movieListUpdated} RateLimit={rate} />
    </div>
  );
}

export default MainThing;
