import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  addUpCommingMovies } from "../utils/moviesSlice";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();
  const UpCommingMovies= useSelector(store => store.movies.UpCommingMovies)
  useEffect(() => {
  !UpCommingMovies && getUpCommingMovies();
  }, []);

  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addUpCommingMovies(json.results));
  };
};

export default useUpCommingMovies;
