// Libraries
import { Button, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

// Resources
import Logo from "@/assets/logo-footer.svg";
import SocialsFacebook from "@/assets/socials-facebook.png";

export const footerResponsiveStyles = {
  height: {
    // xs: "50vh",
    // sm: "50vh",
    // md: "50vh",
    // lg: "60vh",
    // xl: "60vh",
  },
  minHeight: {
    // xs: "500px",
    // sm: "550px",
    // md: "550px",
    // lg: "600px",
    // xl: "600px",
  },
};

const footerSectionStyles = {
  ...footerResponsiveStyles,
  width: "100%",
  padding: "70px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#092B5F",
  color: "white",
};

const footerBySectionStyles = {
  width: "100%",
  padding: "4px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  backgroundColor: "#133365",
  color: "white",
};

const FooterSection = () => {
  return (
    <>
      <Box sx={footerSectionStyles}>
        <Stack
          sx={{ justifyContent: "center" }}
          direction={{ xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
          width={{ xs: "100%", sm: "100%", md: "100%", lg: "50%", xl: "33%" }}
          gap={{ xs: "16px", sm: "16px", md: "16px", lg: "75px", xl: "75px" }}
          useFlexGap
        >
          <img src={Logo} alt="365 Viagens" />
          <Box
            sx={{
              textAlign: "left",
              "& > *": {
                marginBottom: "8px !important",
              },
              a: {
                color: "white",
                textDecoration: "none",
                display: "block",
                ":hover": {
                  fontWeight: 500,
                },

                ":first-of-type": {
                  marginTop: "24px",
                },
              },
            }}
          >
            <Typography variant="body2">+351 965 705 060</Typography>
            <Typography variant="body2">reservas@365viagens.com</Typography>
            <Typography variant="body2" component={"a"} href="#">
              Livro de Reclamações
            </Typography>
            <a href="#">
              <img src={SocialsFacebook} alt="365 Viagens" />
            </a>
          </Box>
        </Stack>
      </Box>
      <Box sx={footerBySectionStyles}>
        <Typography fontSize={"12px"} variant="body2">
          © 365 Agência de Viagens | by Branches
        </Typography>
      </Box>
    </>
  );
};

export default FooterSection;
