import { Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules

import "swiper/css";
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

const cardActionAreaStyles = {
  display: "flex",
  alignItems: "end",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function HeroFlightsSlider() {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={3}
      spaceBetween={15}
      loop={true}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {travels.map(({ travelName, rnavtRef, imgSrc }, id) => {
        return (
          <SwiperSlide key={id} style={{ width: "150px", height: "250px" }}>
            <Card raised sx={{ width: "100%", height: "100%" }}>
              <CardActionArea sx={{ ...cardActionAreaStyles, backgroundImage: `url("${imgSrc}")` }}>
                {/* <CardMedia component="img" height="100%" image={MexicoCardImage} alt="green iguana" /> */}
                <CardContent
                  sx={{
                    width: "100%",
                    // background: "#ffffff40",
                    // background: "#ffffff52",
                    // background: "#E6E7E852",
                    background: "#5daeff52",
                  }}
                >
                  <Typography variant="h6" component="div" color={"ivory"}>
                    {travelName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="ivory"
                    sx={{ fontSize: "11px", fontWeight: 300 }}
                  >
                    {rnavtRef}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroFlightsSlider;
