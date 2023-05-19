import axios from "axios";
import {
  setMovies,
  setMoviePopular,
  setMovieDetail,
  setSearchedMovies,
} from "../reducers/movieReducers";
import { toast } from "react-toastify";

export const getAllMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_TMDB}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    dispatch(setMovies(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getPopularMovie = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_TMDB}/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1`
    );
    dispatch(setMoviePopular(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_TMDB}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US`
    );
    dispatch(setMovieDetail(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getSearchedMovies = (params) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_TMDB}/search/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&query=${params?.name}`
    );
    dispatch(setSearchedMovies(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
