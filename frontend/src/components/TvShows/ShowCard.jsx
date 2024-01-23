import { Card, Skeleton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BaseURL } from "../../utils/common/APIs";
import { useNavigate } from "react-router-dom";

const ShowCard = ({ elem }) => {
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

  const goToShowDetailsPage = (id) => {
    navigate(`/tvShows/tvShowDetails/${id}`);
  };
  return (
    <>
      <Card
        sx={{ maxWidth: 400 }}
        key={data?.title}
        onClick={() => goToShowDetailsPage(data?._id)}
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
              style={{ maxHeight: 300 }}
              component="img"
              height="100%"
              width="100px"
              image={`${BaseURL}/uploads/tvShows/${data?.thumbnail}`}
              alt="green iguana"
            />
          )}
        </CardActionArea>
      </Card>
    </>
  );
};

export default ShowCard;
