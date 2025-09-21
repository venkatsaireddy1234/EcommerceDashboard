import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardsGrid from "./CardsGrid";
import RevenueByLocation from "./RevenueByLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";
import ProjectionsVsActuals from "./ProjectionsVsActuals";
import Revenue from "./Revenue";
import RightBar from "../RightBar/RightBar";
import NavBar from "./NavBar";

const Ecommerce = ({ onOrdersClick, currentPath }) => {
  const theme = useTheme();
  const sidebarBorderColor = theme.palette.mode === "dark" ? "#222" : "#E0E0E0";
  const sidebarBorderWidth = "2px";

  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRight: `${sidebarBorderWidth} solid ${sidebarBorderColor}`, // Match sidebar border
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <NavBar currentPath={currentPath} />
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              mt: 3,
              px: 3,
            }}
          >
            <CardsGrid onOrdersClick={onOrdersClick} />
            <ProjectionsVsActuals />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
              mt: 3,
              px: 3,
            }}
          >
            <Revenue />
            <RevenueByLocation />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
              mt: 3,
              px: 3,
            }}
          >
            <TopSellingProducts />
            <TotalSales />
          </Box>
        </Box>
      </Box>
      <RightBar />
    </Box>
  );
};

export default Ecommerce;
