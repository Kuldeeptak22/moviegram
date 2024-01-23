import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../utils/common/APIs";
import { useParams } from "react-router-dom";
import TvShowDetail from "./TvShowDetail";
import ExtraTvShowDetails from "./ExtraTvShowDetails";
import { fetchSeasonsByTvShow } from "../../utils/common/FetchApi";
import { Container, Row } from "react-bootstrap";
// import BottomSlider from "../Movies/BottomSlider";
// import ExtraDetails from "./ExtraDetails";

const TvShowDetails = () => {
  const tvShow_id = useParams();
  const [show, setShow] = useState({});
  const [seasons, setSeasons] = useState([]);

  const fetchTvShow = async () => {
    try {
      const dataResponse = await axios.get(
        `${BaseURL}/tvShows/get_tvShow/${tvShow_id?.tvShow_id}`
      );
      setShow(dataResponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTvShow();
    fetchSeasonsByTvShow(setSeasons, tvShow_id);
  }, []);

  return (
    <>
      <TvShowDetail data={show} />
      <Container>
        <Row className="text-white">
          <p className="py-2 fw-bold fs-5">Episodes</p>
          <hr />
          <p className="py-2 fw-bold fs-6">Season 1</p>
        </Row>
      </Container>

      {seasons &&
        seasons.map((season) => (
          <ExtraTvShowDetails data={season} key={season._Id} />
        ))}

      {/* <ExtraDetails data={movie}/>
      <BottomSlider movie={movies} />  */}
    </>
  );
};

export default TvShowDetails;
