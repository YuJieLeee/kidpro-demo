import { useRef, useState } from "react";

import { Box, Typography, styled } from "@mui/material";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
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

export function Footer() {
  return (
    <Box display="flex" gap="5px" width="100%">
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="5px">
        <Typography textAlign="center">使用者條款</Typography>
        <Typography textAlign="center">隱私權條款</Typography>
        <Typography textAlign="center">會員權利</Typography>
        <Typography textAlign="center">退費政策</Typography>
        <Typography textAlign="center">社會責任</Typography>
        <Typography textAlign="center">徵才資訊</Typography>
        <Typography textAlign="center">上課中心</Typography>
      </Box>

      <Box>
        <Typography>Copyright © 2018-2025</Typography>
        <Typography>KidPro醫學級兒童發展教育團隊</Typography>
        <Typography>板橋中心：220075 台灣新北市板橋區板新路27號9樓</Typography>
        <Typography>
          華山中心：100024 台灣台北市中正區忠孝東路一段138號3樓(7-11樓上)
        </Typography>
        <Typography>
          辦公室：100009 台灣台北市中正區忠孝東路一段83號15樓之2
        </Typography>
        <Typography>電話：+886-2-7756-6368(週一至週五10:00-18:00)</Typography>
        <Typography>
          商務營運及專業內容：智寶教育股份有限公司-90849836｜技術開發：光立資訊有限公司-90699908
        </Typography>
      </Box>
    </Box>
  );
}

export default function SwiperPage({ categories }: Props) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
    <Box width="100%" position="relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={4.25}
        centeredSlides
        loop
        loopAdditionalSlides={1}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
          navigate("/" + categories[currentSlide].categoryId);
        }}
        style={{ height: "134px" }}
      >
        <Box
          position="absolute"
          top="0"
          right="0"
          height="134px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#64646430"
          zIndex={10}
          sx={{ cursor: "pointer" }}
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
          sx={{ cursor: "pointer" }}
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
              <Typography
                sx={{
                  color: handleActiveSlides(index) ? "#646464" : "#64646450",
                }}
              >
                {category.categoryName}
              </Typography>
              {index === currentSlide && (
                <UnderLine
                  sx={{
                    width: "117px",
                  }}
                />
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Footer />
    </Box>
  );
}
