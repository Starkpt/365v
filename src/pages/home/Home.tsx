import ImgPlane from "@/assets/plane.png";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CTASection from "./cta-section/CTASection";
import HeroSection from "./hero-section/HeroSection";
import ContactsSection from "./contacts-section/ContactsSection";

const flyWithUsButtonStyles = {
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
};

const flyWithUsTypographyStyles = {
  marginLeft: "4px",
  textTransform: "initial",
  textAlign: "left",
  fontWeight: 500,
};

const HomePage = () => {
  return (
    <Box>
      <HeroSection />

      <Button variant="contained" href="#fly-with-us" sx={flyWithUsButtonStyles}>
        <img src={ImgPlane} alt="Fly with us" />
        <Typography variant="body1" color={"primary.main"} sx={flyWithUsTypographyStyles}>
          Fly with us.
        </Typography>
      </Button>

      <CTASection />

      <ContactsSection />
      {/* <Unstable_Grid2 container>
        <Unstable_Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
          <Item>xs=8</Item>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
          <Item>xs=8</Item>
        </Unstable_Grid2>
      </Unstable_Grid2> */}
    </Box>
  );
};

export default HomePage;
