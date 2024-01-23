import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row } from "react-bootstrap";
import "./BottomSlider.scss";
import MovieCard from "../MovieCard/MovieCard";
import { fetchMovies } from "../../utils/common/FetchApi";

const BottomSlider = ({ SliderHeadingData }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(setMovies);
  }, [SliderHeadingData]);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container
      className="d-flex justify-center flex-col align-middle items-center"
      style={{ padding: "0 28px" }}
    >
      <Row className="w-[97%]">
        {SliderHeadingData === "More Like This" && (
          <Slider {...settings}>
            {movies?.length &&
              movies.map((elem) => (
                <MovieCard
                  elem={elem}
                  key={elem._id}
                  // onMouseOver={openMovieModal}
                />
              ))}
          </Slider>
        )}
        <Slider {...settings}>
          {movies?.length &&
            movies
              .filter(
                (a) =>
                  a.category.name.toLowerCase() ===
                  SliderHeadingData.toLowerCase()
              )
              .map((elem) => <MovieCard elem={elem} key={elem._id} />)}
        </Slider>
      </Row>
    </Container>
  );
};

export default BottomSlider;
