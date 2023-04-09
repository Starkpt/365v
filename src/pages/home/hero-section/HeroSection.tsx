import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Card, Box, Typography } from "@mui/material";
import HeroFlightsSlider from "./HeroFlightsSlider";
import Divider from "@mui/material/Divider";

const boxStyles = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyles = {
  position: "absolute",
  width: { xs: "75vw", sm: "55vw", md: "50vw", lg: "55vw", xl: "60vw" },
  // height: "350px",
  padding: "20px 25px",
  boxSizing: "border-box",
};

function HeroSection() {
  return (
    <Box sx={boxStyles}>
      <HeroSlider />
      <Card variant="outlined" sx={cardStyles}>
        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 500 }} color={"primary.main"}>
          Promotions
        </Typography>
        <Divider sx={{ marginBottom: "10px" }} />
        <HeroFlightsSlider />

        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 500 }} color={"primary.main"}>
          Book & Go
        </Typography>
        <Divider sx={{ marginBottom: "10px" }} />
      </Card>
    </Box>
  );
}

export default HeroSection;
