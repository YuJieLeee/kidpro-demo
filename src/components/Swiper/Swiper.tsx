import { useRef, useState } from "react";

import { Box, Typography, styled } from "@mui/material";
import {
  Swiper as SwiperComponent,
  SwiperRef,
  SwiperSlide,
} from "swiper/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "swiper/css";
import { useNavigate } from "react-router";

type Props = {
  categories: {
    categoryName: string;
    categoryId: string;
    imageUrl: string;
  }[];
};

const UnderLine = styled("div")({
  height: "5px",
  backgroundColor: "#D9D9D9",
  marginTop: "10px",
});

function splitCategoryName(name: string): string[] {
  if (name.length >= 4 && name.length <= 6) {
    return [name.slice(0, name.length - 2), name.slice(name.length - 2)];
  } else if (name.length === 7) {
    return [name.slice(0, name.length - 3), name.slice(name.length - 3)];
  }
  return [name];
}

export default function Swiper({ categories }: Props) {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleActiveSlides = (slideIndex: number) => {
    const prevSlide =
      (currentSlide - 1 + categories.length) % categories.length;
    const nextSlide = (currentSlide + 1) % categories.length;

    return (
      slideIndex === currentSlide ||
      slideIndex === prevSlide ||
      slideIndex === nextSlide
    );
  };

  return (
    <SwiperComponent
      ref={swiperRef}
      slidesPerView={4.25}
      centeredSlides
      loop
      loopAdditionalSlides={1}
      onSlideChange={(swiper) => {
        setCurrentSlide(swiper.realIndex);
        if (!window.location.pathname.includes("product"))
          navigate("/" + categories[currentSlide].categoryId);
      }}
      style={{ height: "150px" }}
    >
      <Box
        position="absolute"
        top="0"
        right="0"
        height="134px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={10}
        bgcolor="#64646430"
        sx={{
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#64646450",
          },
        }}
        onClick={() => {
          swiperRef.current?.swiper.slideNext();
        }}
      >
        <KeyboardArrowRightIcon sx={{ color: "white" }} />
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        height="134px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#64646430"
        zIndex={10}
        sx={{
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#64646450",
          },
        }}
        onClick={() => {
          swiperRef.current?.swiper.slidePrev();
        }}
      >
        <KeyboardArrowLeftIcon sx={{ color: "white" }} />
      </Box>

      {categories.map((category, index) => (
        <SwiperSlide key={category.categoryId}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              cursor: handleActiveSlides(index) ? "pointer" : "default",
            }}
            onClick={() => {
              if (handleActiveSlides(index))
                swiperRef.current?.swiper.slideToLoop(index);
            }}
          >
            <img
              src={category.imageUrl}
              alt={category.categoryName}
              style={{
                opacity: handleActiveSlides(index) ? 1 : 0.5,
                width: "80px",
              }}
            />
            {splitCategoryName(category.categoryName).map((line, idx) => (
              <Typography
                variant="subtitle2"
                key={idx}
                sx={{
                  color: handleActiveSlides(index) ? "#646464" : "#64646450",
                }}
              >
                {line}
              </Typography>
            ))}
            {index === currentSlide && (
              <UnderLine
                sx={{
                  width: "80px",
                }}
              />
            )}
          </Box>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
}
