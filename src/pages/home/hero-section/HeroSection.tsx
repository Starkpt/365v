import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Box, Card } from "@mui/material";
import HeroFlightsSlider from "./HeroFlightsSlider";
import HeroSearchNGo from "./HeroSearchNGo";

const boxStyles = {
  height: {
    xs: "90vh",
    sm: "80vh",
    md: "80vh",
    lg: "60vh",
    xl: "60vh",
  },
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
    <Box sx={boxStyles}>
      <HeroSlider />
      <Card variant="outlined" sx={cardStyles}>
        <HeroFlightsSlider />
        <HeroSearchNGo />
      </Card>
    </Box>
  );
}

export default HeroSection;
