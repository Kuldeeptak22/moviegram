import { Container, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import TvShowCard from "../components/TvShows/TvShowCard";
import { fetchData, fetchDataTvShow } from "../utils/common/FetchApi";

const SearchPage = () => {
  const data = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchData(setMovie, data);
    fetchDataTvShow(setShows, data);
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Row>
        <p className="fs-2 text-white pt-5 pb-3">Result</p>
        {isLoading && (
          <div className="d-flex">
            <Skeleton
              variant="rectangle"
              animation="wave"
              height={220}
              width={400}
            />
          </div>
        )}
        {movie &&
          movie.map((elem) => (
            <Col sm={2} key={elem._id}>
              <MovieCard elem={elem} />
            </Col>
          ))}
        {shows &&
          shows.map((elem) => (
            <Col sm={2} key={elem._id}>
              <TvShowCard elem={elem} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
