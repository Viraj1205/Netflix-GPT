import {  API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPopularMovies} from "../utils/moviesSlice";

const usePopularMovie = () => {
  const PopularMovies= useSelector(store => store.movies.PopularMovies)
  const dispatch = useDispatch();
  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",API_OPTION );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
};


export default usePopularMovie 