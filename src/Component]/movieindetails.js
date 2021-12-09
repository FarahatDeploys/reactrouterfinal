import React from "react";
import react from "react-dom";
import MovieListArray from "../Moviearray";
import { useParams } from "react-router";

import { Matcher } from "@testing-library/dom";
// import { RouteProps } from "react-router-dom";
//this functional get the current url and filter the correct element with it's details
const HelloWorld = () => {
  const CurrentID = useParams();
  console.log(CurrentID.id);
  let detailedMovie = MovieListArray.filter(
    (movie) => movie.id === parseInt(CurrentID.id)
  );
  console.log(detailedMovie);
  let { movieName, movieRating, movieTrailer, moviedescription } =
    detailedMovie[0];
  return (
    <div>
      <h1>{movieName}</h1>
      <h1>{movieRating}</h1>
      <iframe height="300" width="400" src={movieTrailer} title="trailer" />
      <p>{moviedescription}</p>
    </div>
  );
};

export default HelloWorld;
