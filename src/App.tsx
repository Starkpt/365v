import { RouterProvider } from "@tanstack/react-router";
import { useState } from "react";
import { router } from "./router/Router";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Nexa"].join(","),
  },
  palette: {
    primary: {
      main: "#041DB8",
      dark: "#0059B2",
    },
    secondary: {
      main: "#ffffff",
      dark: "#B6DCF8",
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
