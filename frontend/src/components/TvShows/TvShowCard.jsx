import React from "react";
import { Card, CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { BaseURL } from "../../utils/common/APIs";
import { useNavigate } from "react-router-dom";

const TvCard = ({ elem }) => {
  const navigate = useNavigate();

  const goToTvShowDetailsPage = (id) => {
    navigate(`/tvShows/tvShowDetails/${id}`);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 400 }}
        key={elem?.title}
        onClick={() => goToTvShowDetailsPage(elem?._id)}
      >
        <CardActionArea>
          <CardMedia
            style={{ maxHeight: 240 }}
            component="img"
            height="100%"
            width="100px"
            image={`${BaseURL}/uploads/tvShows/${elem?.thumbnail}`}
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default TvCard;
