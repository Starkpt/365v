import { Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./heroFlightsSliderStyles.css";

import MexicoCardImage from "@/assets/Viagens/América/América Latina/mexico/mexico.jpg";
import MarrocosCardImage from "@/assets/Viagens/Árfrica/Marrocos/marrocos.jpg";
import UzebequistanCardImage from "@/assets/Viagens/Ásia/Ásia Central/Uzbequistão.jpg";
import { Box } from "@mui/system";

const travels = [
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage, price: 410 },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage, price: 4123 },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage, price: 423 },
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage, price: 2300 },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage, price: 1232 },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage, price: 123 },
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage, price: 311 },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage, price: 598 },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage, price: 413 },
];

const cardContentStyles = {
  width: "100%",
  background: "#5daeff52",
  // @ts-ignore
  background: "linear-gradient(180deg, rgba(9,43,95,0) 0%, rgba(9,43,95,1) 100%)",
  boxSizing: "border-box",
  height: "80px",
  display: "flex",
  alignItems: "center",
  padding: "0 !important",
  transition: "height ease-in-out .6s",

  ".price-tag": {
    position: "absolute",
    translate: "0 70px",
    transition: "translate ease-in-out .5s",
  },

  ":hover": {
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%,  rgba(9,43,95,0.15) 15%, rgba(9,43,95,1) 100%)",
    height: "100px",
    ".price-tag": {
      position: "absolute",
      translate: "0 50px",
    },
  },
};

const cardActionAreaStyles = {
  display: "flex",
  alignItems: "end",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function HeroFlightsSlider() {
  return (
    <Swiper
      // loop={true}
      // spaceBetween={15}
      // slidesPerView={4}
      // slidesPerView={"auto"}
      // centeredSlides={true}
      // watchSlidesProgress={true}
      className="mySwiper"
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      breakpoints={{
        200: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 30,
        },
        576: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1400: {
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1536: {
          slidesPerGroup: 5,
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      {travels.map(({ travelName, rnavtRef, imgSrc, price }, id) => {
        return (
          <SwiperSlide key={id} virtualIndex={id} style={{ width: "150px", height: "250px" }}>
            <Card raised sx={{ ...cardActionAreaStyles, backgroundImage: `url("${imgSrc}")` }}>
              {/* <CardMedia component="img" height="100%" image={MexicoCardImage} alt="green iguana" /> */}
              <CardContent sx={cardContentStyles}>
                <CardActionArea
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "left",
                    alignItems: "flex-start",
                    padding: "10px",
                    justifyContent: "start",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }} color={"ivory"}>
                    {travelName}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="ivory"
                    sx={{ fontSize: "11px", fontWeight: 300 }}
                  >
                    {rnavtRef}
                  </Typography>
                  <Typography
                    className="price-tag"
                    variant="button"
                    color="ivory"
                    bgcolor={"green"}
                    borderRadius={1}
                    sx={{ fontSize: "11px", fontWeight: 500, padding: "2px 6px" }}
                  >
                    {price}€
                  </Typography>
                </CardActionArea>
              </CardContent>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroFlightsSlider;
