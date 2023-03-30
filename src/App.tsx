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
      main: "#007FFF",
      dark: "#0059B2",
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
