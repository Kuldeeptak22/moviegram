import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import TvShowDetail from "./TvShowDetail";
import {  fetchTvShows } from "../../utils/common/FetchApi";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderTvShow = () => {
  const [shows, setShows] = useState([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    fetchTvShows(setShows);
  }, []);

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {shows &&
            shows.slice(0).map((step) => (
            <TvShowDetail data={step} key={step.title}/>
          ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default SliderTvShow;
