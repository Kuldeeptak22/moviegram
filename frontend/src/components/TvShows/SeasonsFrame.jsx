import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../utils/common/APIs";

const SeasonsFrame = () => {
  const urlData = useParams();
  const [url, setUrl] = useState([]);

  const fetchSeason = async () => {
    try {
      const dataResponse = await axios.get(
        `${BaseURL}/seasons/get_season/${urlData?.season_id}`
      );
      setUrl(dataResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeason();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={url?.url}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SeasonsFrame;
