import React, { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import axios from "axios";
import { BaseURL } from "../../utils/common/APIs";
import { useParams } from "react-router-dom";
import ExtraDetails from "./ExtraDetails";

const MovieDetails = () => {
  const movie_id = useParams();
  const [movie, setMovie] = useState([]);
 
  const fetchMovie = async () => {
    try {
      const dataResponse = await axios.get(`${BaseURL}/movies/get_movie/${movie_id?.movie_id}`);
      setMovie(dataResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchMovie();
  }, []);

  return (
    <>
      <MovieDetail data={movie} />
      <ExtraDetails data={movie}/>
    </>
  );
};

export default MovieDetails;
