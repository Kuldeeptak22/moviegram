import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import playStore from "../../essets/images/footer/google-playstore.png";
import IOS from "../../essets/images/footer//ios-appstore.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="pt-24">
      <Row>
        <Col>
          <ul>
            <p className="text-white">Company</p>
            <li className="text-gray-400">
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </li>
            <li>
              <a
                href="https://careers.hotstar.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400"
                style={{ textDecoration: "none" }}
              >
                Careers
              </a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul>
            <p className="text-white">View Website in</p>
            <li className="text-gray-400">English</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <p className="text-white">Need Help?</p>
            <li className="text-gray-400">
              <a
                href=" https://help.hotstar.com/in/en/support/home"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400"
                style={{ textDecoration: "none" }}
              >
                Visit Help Center
              </a>
            </li>

            <li className="text-gray-400">Share Feedback</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <p className="text-white">Connect with Us</p>
            <a
              href="https://www.facebook.com/DisneyPlusHotstar"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 pr-4"
              style={{ textDecoration: "none" }}
            >
              <FacebookIcon className="text-white fs-1" />
            </a>
            <a
              href="https://twitter.com/DisneyPlusHS"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400"
              style={{ textDecoration: "none" }}
            >
              <TwitterIcon className="text-white fs-1" />
            </a>
          </ul>
        </Col>
      </Row>
      <Row className="py-5 d-sm-flex fw-bold" style={{ fontSize: "12px" }}>
        <Col className="text-gray-400">
          <ul>
            <li className="py-2">
              © {new Date().getFullYear()} STAR. All Rights Reserved.
            </li>
            <li>
              <NavLink className="nav-link" to="/termsOfUse">
                Terms of Use
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/privacyPolicy">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <a
                href=" https://help.hotstar.com/in/en/support/home"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400"
                style={{ textDecoration: "none" }}
              >
                FAQ
              </a>
            </li>
          </ul>
        </Col>
        <Col className="d-sm-flex justify-center justify-sm-end py-4">
          <a
            href="https://play.google.com/store/apps/details?id=in.startv.hotstar&pli=1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400"
            style={{ textDecoration: "none" }}
          >
            <img src={playStore} alt={playStore} className="h-12" />
          </a>
          <a
            href="https://apps.apple.com/in/app/hotstar-movies-live-cricket/id934459219"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400"
            style={{ textDecoration: "none" }}
          >
            <img src={IOS} alt={IOS} className="h-12" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
