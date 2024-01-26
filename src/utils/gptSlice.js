import {createSlice} from '@reduxjs/toolkit'
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showSearchGpt: false,
        gptMovies:null,
        movieNames:null,
        movieResults:null,
    },

    reducers:{
        toggleSearchGpt:(state) =>{
            state.showSearchGpt = !state.showSearchGpt;
        }, 
        addGptMovies:(state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
        
    }

})

export const {toggleSearchGpt, addGptMovies} = gptSlice.actions;
export default  gptSlice.reducer