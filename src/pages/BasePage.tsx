import Logo from "@/assets/logo-horizontal.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Container, List, ListItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import { Outlet } from "@tanstack/react-router";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BasePage = () => {
  const [drawerState, setDrawerState] = React.useState<boolean>(false);

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
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { sm: "0 50px", md: "0 100px", lg: "0 150px" },
          }}
        >
          <Box sx={{ display: "block" }}>
            <img src={Logo} alt="365 Viagens" />
          </Box>

          <Button
            color={"inherit"}
            aria-label="Open Menu"
            sx={{ display: { sm: "none" } }}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon color="primary" />
          </Button>

          <Drawer
            //
            anchor={"right"}
            open={drawerState}
            onClose={() => setDrawerState(false)}
          >
            <List sx={{ width: { xs: "180px" } }}>
              <ListItem>
                <Button>Flights</Button>
              </ListItem>
              <ListItem>
                <Button>About</Button>
              </ListItem>
            </List>
          </Drawer>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button>Flights</Button>
            <Button>About</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />

      {/* <Footer /> */}
    </>
  );
};

export default BasePage;
