
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovie"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovie from '../hooks/usePopularMovie'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpCommingMovies from '../hooks/useUpCommingMovies'
import useBiographyMovies from '../hooks/useBiographyMovies'
import SearchGPT from './SearchGPT'
import {useSelector} from 'react-redux'


const Browse = () => {
  const showSearchGpt = useSelector(store => store.gpt.showSearchGpt) 
 useNowPlayingMovies();
 usePopularMovie();
 useTrendingMovies();
 useUpCommingMovies();
 useBiographyMovies();
  return (
    <div>
      <Header />
  {showSearchGpt ?(<SearchGPT />):
  (<>
    <MainContainer />
  <SecondaryContainer />
  </>
  )}
    </div>
  )
}

export default Browse