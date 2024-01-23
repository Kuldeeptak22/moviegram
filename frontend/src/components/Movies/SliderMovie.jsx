import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./SliderMovie.scss";
import MovieDetail from "../MovieDetail/MovieDetail";
import { fetchMovies } from "../../utils/common/FetchApi";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderMovie = () => {
  const [movies, setMovies] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    fetchMovies(setMovies);
  }, []);

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {movies &&
          movies.map((step) => <MovieDetail data={step} key={step.title} />)}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default SliderMovie;
