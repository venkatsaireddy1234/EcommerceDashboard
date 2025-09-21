import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardsGrid from "./CardsGrid/CardsGrid";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import Revenue from "./Revenue/Revenue";
import RevenueByLocation from "./RevenueByLocation/RevenueByLocation";
import TotalSales from "./TotalSales/TotalSales";
import ProjectionsVsActuals from "./ProjectionsBarChart/ProjectionsVsActuals";

const Ecommerce = ({ onOrdersClick, currentPath }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        flex: 1,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        bgcolor: theme.palette.background.default,
        pb: 3,
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          pb: 6,
        }}
      >
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
  );
};

export default Ecommerce;
