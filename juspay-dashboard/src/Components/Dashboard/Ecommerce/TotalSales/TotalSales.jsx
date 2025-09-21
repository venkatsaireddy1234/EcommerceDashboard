import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TotalSalesList from "./TotalSalesList";
import { getSalesData } from "./totalSalesUtils";

const TotalSales = ({ children }) => {
  const theme = useTheme();
  const salesData = getSalesData(theme);
  const bgImage =
    theme.palette.mode === "dark"
      ? "TotalSalesDarkMode.svg"
      : "TotalSalesLightMode.svg";

  return (
    <Box
      sx={{
        width: 202,
        height: 344,
        minWidth: 200,
        maxWidth: 272,
        gap: 2,
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
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 154,
          height: 20,
          opacity: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0,
            color:
              theme.palette.mode === "dark"
                ? "var(--Primary-Light, #F7F9FB)"
                : "#1C1C1C",
          }}
        >
          Total Sales
        </Typography>
      </Box>
      <Box
        sx={{
          width: 120,
          height: 120,
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={bgImage}
          alt="Total Sales"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
      <TotalSalesList salesData={salesData} />
      {children}
    </Box>
  );
};

export default TotalSales;
