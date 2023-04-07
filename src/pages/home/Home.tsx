import HeroSlider from "@/components/hero-slider/HeroSlider";
import { Paper, styled, Unstable_Grid2, Card } from "@mui/material";
import { Box } from "@mui/system";
import NewFlightCard from "./NewFlightCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const HomePage = () => {
  return (
    <Box>
      <Box>
        <HeroSlider />
        <NewFlightCard />
      </Box>
      <Unstable_Grid2 container>
        <Unstable_Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
          <Item>xs=8</Item>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
          <Item>xs=8</Item>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Box>
  );
};

export default HomePage;
