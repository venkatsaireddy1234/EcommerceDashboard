import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardsGrid from "./CardsGrid";
import RevenueByLocation from "./RevenueByLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";
import Revenue from "./Revenue";
import SalesBarChart from "./SalesBarChart";
import LineChart from "./LineGraph";

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
          <SalesBarChart />
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
          {/* <Revenue /> */}
          <LineChart />
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
