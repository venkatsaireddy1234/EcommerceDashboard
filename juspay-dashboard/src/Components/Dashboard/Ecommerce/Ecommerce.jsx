import { Box } from "@mui/material";
import CardsGrid from "./CardsGrid";
import ProjectsVsActuals from "../ProjectsVsActuals";
import Revenue from "../Revenue";
import RevenueByLocation from "../RevenueByLocation";
import TopSellingProducts from "../TopSellingProducts";
import RightBar from "../RightBar";
import NavBar from "../NavBar";
import TotalSales from "../TotalSales";

const Ecommerce = ({ onOrdersClick, currentPath }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      {/* Main Content */}
      <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
        <NavBar currentPath={currentPath} />
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
          <ProjectsVsActuals />
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
      {/* RightBar: remove extra gap and align to start after NavBar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          mt: 3, // Same as NavBar's bottom margin
        }}
      >
        <RightBar />
      </Box>
    </Box>
  );
};

export default Ecommerce;
