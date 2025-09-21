import { StrictMode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import OrdersPage from "./Components/Dashboard/OrdersPage";
import { Box } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import SideBar from "./Components/Dashboard/SideBar";
import Ecommerce from "./Components/Dashboard/Ecommerce/Ecommerce";
import RightBar from "./Components/Dashboard/RightBar/RightBar";

function Layout() {
  const [currentPath, setCurrentPath] = useState("Dashboard / Ecommerce");
  const [currentPage, setCurrentPage] = useState("ecommerce"); // default is ecommerce
  const { mode } = useTheme();

  const theme = createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
      background: {
        default: mode === "light" ? "#fff" : "#000",
        paper: mode === "light" ? "#fff" : "#000", // <-- changed here
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
            overflow: "auto",
            flexDirection: "row",
          }}
        >
          {/* Main content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Box>
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
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <Ecommerce />
                </DashboardLayout>
              }
            />
            <Route
              path="/orders"
              element={
                <DashboardLayout>
                  <OrdersPage />
                </DashboardLayout>
              }
            />
          </Routes>
          <Layout />
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
