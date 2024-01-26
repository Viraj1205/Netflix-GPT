import {  API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  const nowPlayingMovies= useSelector(store => store.movies.nowPlayingMovies)
 
  useEffect(() => {
   if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=2",API_OPTION );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
};


export default useNowPlayingMovies