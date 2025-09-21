import { StrictMode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import SideBar from "./Components/Dashboard/SideBar/SideBar";
import Ecommerce from "./Components/Dashboard/Ecommerce/Ecommerce";
import RightBar from "./Components/Dashboard/RightBar/RightBar";
import NavBar from "./Components/Dashboard/Ecommerce/NavBar/NavBar";
import OrdersPage from "./Components/Dashboard/Orders/OrdersPage";

function Layout() {
  // Set rightBarOpen to true by default so RightBar is open on initial render
  const [rightBarOpen, setRightBarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("ecommerce");
  const [currentPath, setCurrentPath] = useState("Dashboard / Ecommerce");
  const { mode } = useTheme();

  const handleNotificationClick = () => {
    console.log("Notification icon clicked");
    setRightBarOpen((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
      background: {
        default: mode === "light" ? "#fff" : "#000",
        paper: mode === "light" ? "#fff" : "#000",
      },
      text: {
        primary: mode === "light" ? "#1C1C1C" : "#fff",
        secondary: mode === "light" ? "#1C1C1C66" : "#fff",
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
        <SideBar onPathChange={setCurrentPath} onPageChange={setCurrentPage} />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            overflow: "hidden",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
            }}
          >
            <NavBar
              currentPath={currentPath}
              onNotificationClick={handleNotificationClick}
            />
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
              }}
            >
              {currentPage === "ecommerce" && (
                <Ecommerce
                  onOrdersClick={() => {
                    setCurrentPage("orders");
                    setCurrentPath("Dashboard / Orders");
                  }}
                  currentPath={currentPath}
                />
              )}
              {currentPage === "orders" && <OrdersPage />}
            </Box>
          </Box>
          <Box
            sx={{
              width: rightBarOpen ? 320 : 0,
              minWidth: rightBarOpen ? 320 : 0,
              maxWidth: rightBarOpen ? 320 : 0,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              bgcolor: "background.paper",
              boxSizing: "border-box",
              height: "100vh",
              overflowY: "auto",
              borderLeft: rightBarOpen
                ? (theme) =>
                    `2px solid ${
                      theme.palette.mode === "dark" ? "#222" : "#E0E0E0"
                    }`
                : "none",
            }}
          >
            {rightBarOpen && <RightBar />}
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
        <Router future={{ v7_startTransition: true }}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/dashboard" element={<Layout />} />
            <Route path="/orders" element={<Layout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
