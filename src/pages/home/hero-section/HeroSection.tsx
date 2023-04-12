import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Box, Card } from "@mui/material";
import HeroFlightsSlider from "./HeroFlightsSlider";
import HeroSearchNGo from "./HeroSearchNGo";

const boxStyles = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyles = {
  position: "absolute",
  width: { xs: "75vw", sm: "55vw", md: "50vw", lg: "65vw", xl: "60vw" },
  // height: "350px",
  padding: "20px 25px",
  boxSizing: "border-box",
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
