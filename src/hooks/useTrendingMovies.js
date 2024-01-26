import {  API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTrendingMovies} from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const trendingMovies= useSelector(store => store.movies.trendingMovies)
  const dispatch = useDispatch();
  useEffect(() => {
   !trendingMovies&& getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTION );
    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };
};


export default useTrendingMovies