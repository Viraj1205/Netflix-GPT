
import {createSlice} from "@reduxjs/toolkit"
const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null, 
        trailerVideo:null,
        PopularMovies:null,
        trendingMovies:null,
        UpCommingMovies:null,
        biographyMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
        addUpCommingMovies:(state,action)=>{
            state.UpCommingMovies=action.payload;
        },

        addBiographyMovies:(state,action)=>{
            state.biographyMovies=action.payload;
        },
    },

});

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies, addTrendingMovies, addUpCommingMovies,addBiographyMovies} = movieSlice.actions;
export default movieSlice.reducer;