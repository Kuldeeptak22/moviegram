import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ErrorImage from "../essets/images/error/errorPage.jpg";

const ErrorPage = () => {
  return (
    <Container>
      <Row className="flex items-center sm:h-[100vh]">
        <Col sm={6} className="my-4">
          <img src={ErrorImage} alt="ErrorImage" />
        </Col>
        <Col sm={6} className="text-white text-center my-4 sm:my-0">
          <h1>Oppssss...!!!</h1>
          <h2>Page Not Found <span className="text-red-500">404</span></h2>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
