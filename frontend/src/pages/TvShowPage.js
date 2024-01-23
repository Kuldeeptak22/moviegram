import { Container, Row } from "react-bootstrap";
import BottomSliderTvShow from "../components/TvShows/BottomSliderTvShow";
import SliderHeadingShow from "../components/TvShows/SliderHeadingShow";
import SliderTvShow from "../components/TvShows/SliderTvShow";

const TvShowPage = () => {
  const SliderHeadingData = {
    title1: "More Like This",
    title2: "Mythology",
  };
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <SliderTvShow />
        <SliderHeadingShow SliderHeadingData={SliderHeadingData.title1} />
        <BottomSliderTvShow SliderHeadingData={SliderHeadingData.title1} />
      </Row>
    </Container>
  );
};

export default TvShowPage;
