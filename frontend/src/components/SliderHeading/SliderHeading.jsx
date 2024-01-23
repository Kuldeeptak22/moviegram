import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SliderHeading = ({ SliderHeadingData }) => {
  const navigate = useNavigate();

  const goTOViewAll = (SliderHeadingData) => {
    navigate(`/movies/viewAllMovies/${SliderHeadingData}`);
  };

  return (
    <div className="flex justify-content-between pt-4 align-middle items-center">
      <p className="pl-20 fs-4 text-white">
        {SliderHeadingData === "More Like This"
          ? SliderHeadingData
          : `${SliderHeadingData} Movie`}
      </p>
      <p
        className="pr-20 fs-5 cursor-pointer"
        onClick={() => goTOViewAll(SliderHeadingData)}
      >
        <Button className=" text-white">
          view All <ChevronRightIcon />
        </Button>
      </p>
    </div>
  );
};

export default SliderHeading;
