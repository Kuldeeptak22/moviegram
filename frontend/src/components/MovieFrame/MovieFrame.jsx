import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../utils/common/APIs";

const MovieFrame = () => {
  const urlData = useParams();
  const [url, setUrl] = useState([]);
  const fetchMovie = () => {
    axios
      .get(`${BaseURL}/movies/get_movie/${urlData.movie_id}`)
      .then((res) => setUrl(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={url.trailorUrl}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieFrame;
