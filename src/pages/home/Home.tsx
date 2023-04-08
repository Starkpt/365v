import { Paper, Unstable_Grid2, styled } from "@mui/material";
import { Box } from "@mui/system";
import HeroSection from "./hero-section/HeroSection";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
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
