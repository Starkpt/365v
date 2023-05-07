import { heroSectionResponsiveStyles } from "@/pages/home/hero-section/HeroSection";
import { Box } from "@mui/system";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

const heroSliderWrapperStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  overflow: "hidden",
  top: 0,
};

function HeroSlider() {
  return (
    <Box sx={heroSliderWrapperStyles}>
      <Box sx={heroSectionResponsiveStyles}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          modules={[EffectFade]}
          effect="fade"
          style={{ height: "100%" }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default HeroSlider;
