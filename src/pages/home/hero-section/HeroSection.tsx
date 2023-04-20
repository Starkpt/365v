import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Box, Card, Button, Typography } from "@mui/material";
import HeroFlightsSlider from "./HeroFlightsSlider";
import HeroSearchNGo from "./HeroSearchNGo";
import ImgPlane from "@/assets/plane.png";

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
      <Button
        variant="contained"
        href="#text-buttons"
        sx={{
          position: "absolute",
          bottom: "-90px",
          zIndex: 1,
          borderRadius: "0",
          height: "90px",
          width: "100%",
          backgroundColor: "white",
          boxShadow:
            "0px -5px 5px -3px rgba(0,0,0,0.2), 0px -8px 10px -1px rgba(0,0,0,0.14), 0px -3px 4px -2px rgba(0,0,0,0.12)",

          ":hover": {
            boxShadow:
              "0px -5px 5px -3px rgba(0,0,0,0.2), 0px -8px 10px -1px rgba(0,0,0,0.14), 0px -3px 4px -2px rgba(0,0,0,0.12) !important",
            background: "#b6dcf8",
            //@ts-expect-error
            background: " linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(182,220,248,1) 100%)",
          },
        }}
      >
        <img src={ImgPlane} alt="Fly with us" />
        <Typography
          variant="body1"
          sx={{
            marginLeft: "4px",
            textTransform: "initial",
            textAlign: "left",
            fontWeight: 500,
          }}
          color={"primary.main"}
        >
          Fly with us.
        </Typography>
      </Button>
    </Box>
  );
}

export default HeroSection;
