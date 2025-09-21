import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TopSellingProductsTable from "./TopSellingProductsTable";
import { getTopSellingProductsRows } from "./topSellingProductsUtils";

const TopSellingProducts = () => {
  const theme = useTheme();
  const rows = getTopSellingProductsRows();

  const headerColor = theme.palette.mode === "dark" ? "#FFFFFF66" : "#1C1C1C";

  return (
    <Box
      sx={{
        width: 662,
        height: 336,
        minWidth: 662,
        gap: 0.5,
        opacity: 1,
        p: 3,
        borderRadius: 2,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        bgcolor:
          theme.palette.mode === "dark"
            ? "#1C1C1C"
            : "var(--Primary-Light, #F7F9FB)",
        mt: 3,
        mb: 4,
      }}
    >
      <Box
        sx={{
          width: 614,
          height: 20,
          borderRadius: 1,
          opacity: 1,
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            color: headerColor,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0,
          }}
        >
          Top Selling Products
        </Typography>
      </Box>
      <TopSellingProductsTable rows={rows} />
    </Box>
  );
};

export default TopSellingProducts;
