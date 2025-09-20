import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useTheme } from "@mui/material/styles";

const salesData = [
  {
    label: "Orders",
    value: "$300.56",
    icon: <ShoppingCartIcon fontSize="small" sx={{ color: "#1976d2" }} />,
  },
  {
    label: "Discounts",
    value: "$120.00",
    icon: <LocalOfferIcon fontSize="small" sx={{ color: "#43a047" }} />,
  },
  {
    label: "Growth",
    value: "$80.25",
    icon: <TrendingUpIcon fontSize="small" sx={{ color: "#fbc02d" }} />,
  },
  {
    label: "Stores",
    value: "$50.00",
    icon: <StorefrontIcon fontSize="small" sx={{ color: "#8e24aa" }} />,
  },
];

const TotalSales = ({ children }) => {
  const theme = useTheme();
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
      {/* Title */}
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
      {/* Image */}
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
      {/* Values Container */}
      <Box
        sx={{
          width: 154,
          height: 124,
          borderRadius: 2, // 16px
          opacity: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5, // 12px
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        {salesData.map((item, idx) => (
          <Box
            key={item.label}
            sx={{
              width: 154,
              height: 22,
              borderRadius: 1, // 8px
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 6, // 48px
              px: 1,
            }}
          >
            {/* Left value with icon */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: 53,
                height: 22,
                borderRadius: 1, // 8px
                opacity: 1,
                pt: "2px",
                pr: 1, // 8px
                pb: "2px",
                pl: 0.5, // 4px
                background: "transparent",
                gap: 0.5,
              }}
            >
              {item.icon}
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: 12,
                  lineHeight: "18px",
                  letterSpacing: 0,
                  color:
                    theme.palette.mode === "dark"
                      ? "var(--Primary-Light, #F7F9FB)"
                      : "#1C1C1C",
                  ml: 0.5,
                }}
              >
                {item.label}
              </Typography>
            </Box>
            {/* Right value */}
            <Box
              sx={{
                width: 53,
                height: 18,
                borderRadius: 1, // 8px
                opacity: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: 12,
                  lineHeight: "18px",
                  letterSpacing: 0,
                  color:
                    theme.palette.mode === "dark"
                      ? "var(--Primary-Light, #F7F9FB)"
                      : "#1C1C1C",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      {children}
    </Box>
  );
};

export default TotalSales;
