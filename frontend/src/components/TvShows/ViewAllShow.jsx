import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ShowCard from "./ShowCard";
import { fetchTvShows } from "../../utils/common/FetchApi";
import { Skeleton } from "@mui/material";

const ViewAllShow = () => {
  const categoryName = useParams();
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState(shows);

  let dataFilter = categoryName.category;
  const filterItems = (dataFilter) => {
    const filtered = shows.filter((item) =>
      dataFilter !== "More Like This"
        ? item?.category?.name
            ?.toLowerCase()
            ?.includes(dataFilter?.toLowerCase())
        : item
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    fetchTvShows(setShows);
    filterItems(dataFilter);
    setIsLoading(false);
  }, [shows]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-center align-middle items-center py-5 fs-2 text-white">
        {categoryName?.category === "More Like This"
          ? categoryName?.category
          : `${categoryName?.category} Show`}
      </Row>
      <Row className="my-5">
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
        {filteredItems &&
          filteredItems.map((data) => (
            <Col sm={2} className="p-2" key={data?._id}>
              <ShowCard elem={data} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ViewAllShow;
