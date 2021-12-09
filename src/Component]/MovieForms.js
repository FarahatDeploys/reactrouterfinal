import React from "react";
import { useState } from "react";

const MovieForms = ({ movieListUpdated, setMovieListUpdated }) => {
  const [movieData, setMovieData] = useState({
    movieName: "",
    movieLink: "",
    movieRating: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovieListUpdated([...movieListUpdated, movieData]);

    setMovieData({
      movieName: "",
      movieLink: "",
      movieRating: 0,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieData.movieName}
          onChange={(e) => {
            setMovieData({ ...movieData, movieName: e.target.value });
          }}
          name="df"
        />
        <input
          type="text"
          value={movieData.movieLink}
          onChange={(e) => {
            setMovieData({ ...movieData, movieLink: e.target.value });
          }}
          name="df"
        />
        <input
          type="number"
          value={movieData.movieRating}
          onChange={(e) => {
            setMovieData({
              ...movieData,
              movieRating: parseInt(e.target.value),
            });
          }}
          name="df"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MovieForms;
