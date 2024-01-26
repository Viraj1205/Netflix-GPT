import {  API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addBiographyMovies} from "../utils/moviesSlice";

const useBiographyMovies = () => {
  const biographyMovies= useSelector(store => store.movies.biographyMovies)
  const dispatch = useDispatch();
  useEffect(() => {
   !biographyMovies && getBiographyMovies();
  }, []);

  const getBiographyMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=3",API_OPTION );
    const json = await data.json();

    dispatch(addBiographyMovies(json.results));
  };
};


export default useBiographyMovies 