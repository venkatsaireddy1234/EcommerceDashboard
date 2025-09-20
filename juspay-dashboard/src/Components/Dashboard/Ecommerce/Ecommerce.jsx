import { Box } from "@mui/material";
import CardsGrid from "./CardsGrid";
import RevenueByLocation from "./RevenueByLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";
import ProjectionsVsActuals from "./ProjectionsVsActuals";
import Revenue from "./Revenue";
import RightBar from "../RightBar/RightBar";
import NavBar from "./NavBar";

const Ecommerce = ({ onOrdersClick, currentPath }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {/* Main Content */}
      <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
        <NavBar currentPath={currentPath} />
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              mt: 3,
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
            }}
          >
            <TopSellingProducts />
            <TotalSales />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ecommerce;
