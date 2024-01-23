import React from "react";
import SliderMovie from "../components/Movies/SliderMovie";
import { Container, Row } from "react-bootstrap";
import BottomSlider from "../components/Movies/BottomSlider";
import SliderHeading from "../components/SliderHeading/SliderHeading";

const SliderHeadingData = {
  title1: "More Like This",
  title2: "Comedy",
  title3: "Drama",
  title4: "Action",
  title5: "Horror",
  title6: "Romantic",
};

const MoviesPage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <SliderMovie />
        <SliderHeading SliderHeadingData={SliderHeadingData.title1} />
        <BottomSlider SliderHeadingData={SliderHeadingData.title1} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title2} />
        <BottomSlider SliderHeadingData={SliderHeadingData.title2} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title3} />
        <BottomSlider SliderHeadingData={SliderHeadingData.title3} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title4} />
        <BottomSlider SliderHeadingData={SliderHeadingData.title4} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title5} />
        <BottomSlider SliderHeadingData={SliderHeadingData.title5} />
        <SliderHeading SliderHeadingData={SliderHeadingData.title6} />
        <BottomSlider SliderHeadingData={SliderHeadingData.title6} />
      </Row>
    </Container>
  );
};

export default MoviesPage;
