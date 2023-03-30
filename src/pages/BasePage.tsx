import { Box, Button, Container, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Outlet } from "@tanstack/react-router";
import { Menu } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const a = ["a", "b", "c", "d", "e"];

const BasePage = () => {
  return (
    <>
      {/* Header */}
      <Container>
        <Grid2 container>
          <Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
            <Item>xs=8</Item>
          </Grid2>
          <Grid2 xs={8} sm={8} md={8} lg={8} xl={8}>
            <Item>xs=8</Item>
          </Grid2>
        </Grid2>
      </Container>

      <AppBar color="secondary" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />

      {/* <Footer /> */}
    </>
  );
};

export default BasePage;
