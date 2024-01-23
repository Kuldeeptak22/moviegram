import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { BaseURL } from "../../utils/common/APIs";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useNavigate } from "react-router-dom";

const ExtraTvShowDetails = ({ data }) => {
  const navigate = useNavigate();
  const goToTvShowFrame = (id) => {
    navigate(`/seasons/seasonsFrame/${id}`);
  };
  return (
    <Container className="text-white my-5">
      <Row>
        <Col sm={3} className="relative">
          <img
            src={`${BaseURL}/uploads/seasons/${data?.poster}`}
            alt={data?.epTitle}
            className="h-[8.3rem] w-60 rounded-1 cursor-pointer"
            onClick={() => goToTvShowFrame(data?._id)}
          />
          <PlayArrowRoundedIcon className="absolute bottom-4 fs-2" />
        </Col>
        <Col sm={7}>
          <div className="pb-1 text-xl/6 fw-bold">{data?.epTitle}</div>
          <div className="flex pb-1">
            <div className="text-xl/2 fw-bold">{data?.episode}</div>
            <div className="text-slate-400 px-2">
              <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
            </div>
            <div className="text-xl/2 fw-bold">{data?.releaseDate}</div>
            <div className="text-slate-400 px-2">
              <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
            </div>
            <div className="text-xl/2 fw-bold">42m</div>
          </div>
          <div className="text-gray-400 pb-1 text-sm">{data?.description}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExtraTvShowDetails;
