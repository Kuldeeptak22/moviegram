import axios from "axios";
import { BaseURL } from "./APIs";

export const fetchData = async (setMovie, data) => {
  try {
    const encodedSearchQuery = encodeURIComponent(data.data);
    const dataResponse = await axios.get(
      `${BaseURL}/movies/get_movies?search=${encodedSearchQuery}`
    );
    setMovie(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchMoviebyCategory = async (setMovies, data) => {
  try {
    const dataResponse = await axios.get(
      `${BaseURL}/movies/get_movies?category=${data}`
    );
    setMovies(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovies = async (setMovies) => {
  try {
    const dataResponse = await axios.get(`${BaseURL}/movies/get_movies`);
    setMovies(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovie = async (setMovie, movie_id) => {
  try {
    const dataResponse = await axios.get(
      `${BaseURL}/movies/get_movie/${movie_id?.movie_id}`
    );
    setMovie(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchTvShows = async (setShows) => {
  try {
    const dataResponse = await axios.get(`${BaseURL}/tvShows/get_tvShows`);
    setShows(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchSeasons = async (setSeasons) => {
  try {
    const dataResponse = await axios.get(`${BaseURL}/seasons/get_seasons`);
    setSeasons(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchSeasonsByTvShow = async (setSeasons, tvShow_id) => {
  try {
    const dataResponse = await axios.get(
      `${BaseURL}/seasons/get_seasonByTvShow/${tvShow_id.tvShow_id}`
    );
    setSeasons(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchDataTvShow = async (setShows, data) => {
  try {
    const encodedSearchQuery = encodeURIComponent(data.data);
    const dataResponse = await axios.get(
      `${BaseURL}/tvShows/get_tvShows?search=${encodedSearchQuery}`
    );
    setShows(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchBlogs = async (setBlogs) => {
  try {
    const dataResponse = await axios.get(`${BaseURL}/blogs/get_blogs`);
    setBlogs(dataResponse.data.data);
  } catch (error) {
    console.log(error);
  }
};