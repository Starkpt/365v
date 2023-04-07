import Logo from "@/assets/logo-horizontal.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, List, ListItemButton, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "@tanstack/react-router";
import React from "react";

const BasePage = () => {
  const [drawerState, setDrawerState] = React.useState<boolean>(false);

  return (
    <>
      {/* Header */}
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
              <ListItemButton>
                <ListItemText primary="Flights" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="About" />
              </ListItemButton>
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
