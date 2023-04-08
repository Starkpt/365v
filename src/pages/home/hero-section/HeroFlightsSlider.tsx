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

const travels = [
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage },
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage },
  { travelName: "México", rnavtRef: "RNAVT 1234", imgSrc: MexicoCardImage },
  { travelName: "Marrocos", rnavtRef: "RNAVT 1234", imgSrc: MarrocosCardImage },
  { travelName: "Uzebequistan", rnavtRef: "RNAVT 1234", imgSrc: UzebequistanCardImage },
];

const cardContentStyles = {
  width: "100%",
  background: "#5daeff52",
  boxSizing: "border-box",
  height: "80px",
  display: "flex",
  alignItems: "center",
  padding: "0 !important",
  transition: "background ease-in-out .2s",
  ":hover": { background: "#2961c980" },
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
      className="mySwiper"
      // slidesPerView={4}
      // slidesPerView={"auto"}
      // spaceBetween={15}
      // centeredSlides={true}
      // watchSlidesProgress={true}
      // loop={true}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1536: {
          slidesPerGroup: 5,
          slidesPerView: 5,
          spaceBetween: 15,
        },
      }}
    >
      {travels.map(({ travelName, rnavtRef, imgSrc }, id) => {
        return (
          <SwiperSlide key={id} virtualIndex={id} style={{ width: "150px", height: "250px" }}>
            <Card raised sx={{ ...cardActionAreaStyles, backgroundImage: `url("${imgSrc}")` }}>
              {/* <CardMedia component="img" height="100%" image={MexicoCardImage} alt="green iguana" /> */}
              <CardContent sx={cardContentStyles}>
                <CardActionArea sx={{ height: "100%" }}>
                  <Typography variant="subtitle1" color={"ivory"}>
                    {travelName}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="ivory"
                    sx={{ fontSize: "11px", fontWeight: 300 }}
                  >
                    {rnavtRef}
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
