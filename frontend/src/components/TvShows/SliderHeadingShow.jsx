import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SliderHeadingShow = ({ SliderHeadingData }) => {
  const navigate = useNavigate();

  const goTOViewAll = (SliderHeadingData) => {
    navigate(`/tvShows/viewAllShows/${SliderHeadingData}`);
  };

  return (
    <div className="flex justify-content-between pt-4 align-middle items-center">
      <p className="sm:pl-20 pl-4 fs-4 text-white">
        {SliderHeadingData === "More Like This"
          ? SliderHeadingData
          : `${SliderHeadingData} Show`}
      </p>
      <p
        className="sm:pr-20 pr-4 fs-5 cursor-pointer"
        onClick={() => goTOViewAll(SliderHeadingData)}
      >
        <Button className=" text-white">
          view All <ChevronRightIcon />
        </Button>
      </p>
    </div>
  );
};

export default SliderHeadingShow;
