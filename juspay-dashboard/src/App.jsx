import { StrictMode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import SideBar from "./Components/Dashboard/SideBar";
import NavBar from "./Components/Dashboard/NavBar";
import Ecommerce from "./Components/Dashboard/Ecommerce";
import { Box } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import OrdersPage from "./Components/Dashboard/OrdersPage";

function Layout() {
  const [currentPath, setCurrentPath] = useState("Dashboard / Default");
  const { mode } = useTheme();

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#1C1C1C" : "#ffffff",
        secondary: mode === "light" ? "#1C1C1C66" : "#ffffff66",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <SideBar onPathChange={setCurrentPath} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
          }}
        >
          <NavBar currentPath={currentPath} />
          <Box sx={{ p: 3 }}>
            {/* <Ecommerce /> */}
            <OrdersPage />
          </Box>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
