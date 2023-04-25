import Room from "@/assets/imgs/sala.jpg";
import { Box, Button, Card, Typography } from "@mui/material";

export const callToActionResponsiveStyles = {
  height: {
    xs: "50vh",
    sm: "50vh",
    md: "50vh",
    lg: "60vh",
    xl: "60vh",
  },
  minHeight: {
    xs: "500px",
    sm: "550px",
    md: "550px",
    lg: "600px",
    xl: "600px",
  },
};

const callToActionStyles = {
  ...callToActionResponsiveStyles,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const cardStyles = {
  width: { xs: "75vw", sm: "55vw", md: "50vw", lg: "65vw", xl: "60vw" },
  minWidth: "300px",
  // height: "350px",
  // padding: "20px 25px",
  boxSizing: "border-box",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f6f8",
  border: 0,
};

function CTASection() {
  return (
    <Box sx={callToActionStyles}>
      <Card variant="outlined" sx={cardStyles}>
        <Box
          sx={{
            backgroundImage: `url(${Room})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "200px",
          }}
        />
        <Box
          sx={{
            padding: "20px 45px 25px",
          }}
        >
          <Typography variant="body2" color={"primary.main"} sx={{ marginBottom: 2 }}>
            If you have already a destination or set of destinations in mind but don’t want to deal
            with the hassle of preparations, we can help you with that. Fill our form of your
            prefered places to visit and we’ll come up with a custom travel plan for you.
          </Typography>

          <Button sx={{ height: "32px", textTransform: "unset" }} variant="contained" size="small">
            <Typography variant="body2" fontWeight={500}>
              Plan your next trip
            </Typography>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default CTASection;
