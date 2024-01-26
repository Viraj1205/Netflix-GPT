import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"UpComming"} movies={movies.UpCommingMovies} />
        <MovieList title={"Horror"} movies={movies.biographyMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
