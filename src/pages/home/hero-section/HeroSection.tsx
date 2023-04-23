import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Box, Card, Button, Typography } from "@mui/material";
import HeroFlightsSlider from "./HeroFlightsSlider";
import HeroSearchNGo from "./HeroSearchNGo";

export const heroSectionResponsiveStyles = {
  height: {
    xs: "90vh",
    sm: "80vh",
    md: "80vh",
    lg: "60vh",
    xl: "60vh",
  },
  minHeight: {
    xs: "850px",
    sm: "850px",
    md: "750px",
    lg: "650px",
    xl: "650px",
  },
};

const heroSectionStyles = {
  ...heroSectionResponsiveStyles,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const cardStyles = {
  width: { xs: "75vw", sm: "55vw", md: "50vw", lg: "65vw", xl: "60vw" },
  // height: "350px",
  padding: "20px 25px",
  boxSizing: "border-box",
  zIndex: 1,
};


function HeroSection() {
  return (
    <Box sx={heroSectionStyles}>
      <HeroSlider />
      <Card variant="outlined" sx={cardStyles}>
        <HeroFlightsSlider />
        <HeroSearchNGo />
      </Card>
    </Box>
  );
}

export default HeroSection;
