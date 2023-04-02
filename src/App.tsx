import { RouterProvider } from "@tanstack/react-router";
import { useState } from "react";
import { router } from "./router/Router";

import { ThemeProvider } from "@mui/system";
import "./App.css";
import "./index.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#041DB8",
      dark: "#0059B2",
    },
    secondary: {
      main: "#ffffff",
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
