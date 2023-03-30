import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Outlet } from "@tanstack/react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const a = ["a", "b", "c", "d", "e"];

const BasePage = () => {
  return (
    <div>
      {/* Header */}
      <Container>
        <Grid2 container>
          <Grid2 xs={8}>
            <Item>xs=8</Item>
          </Grid2>
        </Grid2>
      </Container>
      <Outlet />
    </div>
  );
};

export default BasePage;
