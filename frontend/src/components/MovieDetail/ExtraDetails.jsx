import React from "react";
import { Container, Row } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ExtraDetails = ({ data }) => {
  return (
    <Container>
      <Row className="d-flex justify-center text-center my-5">
        <p className="fs-2 text-yellow-300 fw-bold py-5">More Details</p>
        <TableContainer component={Paper} sx={{ background: "transparent" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="left" className="text-white fs-5">
                  Title
                </TableCell>
                <TableCell align="right" className="text-white fs-5 ">
                  {data?.title}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="text-white fs-5">
                  Language
                </TableCell>
                <TableCell align="right" className="text-white fs-5 ">
                  {data?.language}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="text-white fs-5">
                  Rating
                </TableCell>
                <TableCell align="right" className="text-white fs-5">
                  {data?.rating}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="text-white fs-5">
                  Views
                </TableCell>
                <TableCell align="right" className="text-white fs-5 ">
                  {data?.views}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="text-white fs-5">
                  Cast
                </TableCell>
                <TableCell align="right" className="text-white fs-5 ">
                  {` ${data?.cast},`}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="text-white fs-5">
                  Director
                </TableCell>
                <TableCell align="right" className="text-white fs-5 ">
                  {data?.director}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" className="text-white fs-5 ">
                  Description
                </TableCell>
                <TableCell align="right" className="text-white fs-5 ">
                  <span className="pl-24 w-8">{data?.description}</span>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Row>
    </Container>
  );
};

export default ExtraDetails;
