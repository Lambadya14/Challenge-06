import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  moviePopular: [],
  movieDetails: [],
  searchedMovies: [],
};
const movieSlicer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMoviePopular: (state, action) => {
      state.moviePopular = action.payload;
    },
    setMovieDetail: (state, action) => {
      state.movieDetails = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const { setMovies, setMoviePopular, setMovieDetail, setSearchedMovies } =
  movieSlicer.actions;

export default movieSlicer.reducer;
