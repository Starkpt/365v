import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Card, Box } from "@mui/material";
import HeroFlightsSlider from "./HeroFlightsSlider";

const boxStyles = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyles = {
  position: "absolute",
  width: { xs: "75vw", sm: "55vw", md: "45vw", lg: "55vw", xl: "60vw" },
  height: "350px",
  padding: "10px",
  boxSizing: "border-box",
};

function HeroSection() {
  return (
    <Box sx={boxStyles}>
      <HeroSlider />
      <Card variant="outlined" sx={cardStyles}>
        <HeroFlightsSlider />
      </Card>
    </Box>
  );
}

export default HeroSection;
