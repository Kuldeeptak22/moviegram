import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/common/APIs";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

const MovieCard = ({ elem }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const cardDetails = () => {
    setData(elem);
    setIsLoading(false);
  };
  useEffect(() => {
    cardDetails();
  }, []);

  const goToMovieDetailsPage = (id) => {
    navigate(`/movies/movieDetails/${id}`);
  };
  return (
    <>
      <Card
        sx={{ maxWidth: 400 }}
        key={data?.title}
        onClick={() => goToMovieDetailsPage(data?._id)}
      >
        <CardActionArea>
          {isLoading ? (
            <Skeleton
              variant="rectangle"
              animation="wave"
              height={220}
              width={400}
            />
          ) : (
            <CardMedia
              style={{ maxHeight: 210 }}
              component="img"
              height="100%"
              width="100px"
              image={`${BaseURL}/uploads/movies/${data?.thumbnail}`}
              alt={data?.title}
            />
          )}
        </CardActionArea>
      </Card>
    </>
  );
};

export default MovieCard;
