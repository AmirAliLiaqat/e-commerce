import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 py-2">
        {sectionName}
      </h2>
      <div className="border">
        <div className="relative p-5">
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
          />

          {activeIndex !== 0 && (
            <Button
              variant="contained"
              className="z-50"
              aria-label="prev"
              sx={{
                position: "absolute",
                top: "10rem",
                left: "0rem",
                bgcolor: "white",
                transform: "translateX(-50%) rotate(-90deg)",
              }}
              onClick={slidePrev}
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          )}

          {activeIndex !== items.length - 5 && (
            <Button
              variant="contained"
              className="z-50"
              aria-label="next"
              sx={{
                position: "absolute",
                top: "10rem",
                right: "0rem",
                bgcolor: "white",
                transform: "translateX(50%) rotate(90deg)",
              }}
              onClick={slideNext}
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarosel;
